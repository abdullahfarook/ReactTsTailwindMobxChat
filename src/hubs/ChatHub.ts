import { HttpTransportType, HubConnection, HubConnectionBuilder, IStreamResult, LogLevel } from '@microsoft/signalr';
import { v4 as uuid } from 'uuid';
export class ChatHub {
  conversationId: string = uuid();
  userInput: string = '';
  canSend: boolean = true;
  canStop: boolean = false;
  isConnected: boolean = false;
  isConnecting: boolean = false;
  
  // Messages and settings
  webSocketChatMessages: WebSocketChatMessage[] = [];
  localStorageSettings: LocalStorageSettings = {
    inferenceSettings: {
      temperature: 0.7,
      maxTokens: 1000,
      topP: 1.0,
      frequencyPenalty: 0.0,
      presencePenalty: 0.0
    },
    systemMessage: 'You are a helpful assistant.',
    darkMode: false,
    settingsVersion: 1
  };

  // SignalR connection
  private hubConnection?: HubConnection;
  private connectionUrl: string;
  private accessTokenProvider: () => Promise<string | null>;

  // Callback functions
  private onInferenceString?: InferenceStringCallback;
  private onInferenceStatus?: InferenceStatusCallback;
  private onStateChange?: StateChangeCallback;

  constructor(
    connectionUrl: string,
    accessTokenProvider: () => Promise<string | null>
  ) {
    this.connectionUrl = connectionUrl;
    this.accessTokenProvider = accessTokenProvider;
    
  }

  // Public methods
  public initialize(conversationId: string, messages: WebSocketChatMessage[]): void {
    this.conversationId = conversationId;
    this.webSocketChatMessages = [...messages];
  }

  public async startAsync(): Promise<void> {
    if (this.isConnecting || this.isConnected) {
      return;
    }

    this.isConnecting = true;

    try {
      await this.createHubConnection();
      await this.hubConnection!.start();
      
      this.isConnected = true;
      this.isConnecting = false;

      this.notifyStateChange(true);
      console.log('WebSocketChat: Connected to SignalR hub');
    } catch (error) {
      console.error('WebSocketChat: Failed to start connection', error);
      this.isConnected = false;
      this.isConnecting = false;
      this.notifyStateChange(false);
      throw error;
    }
  }

  public async stopAsync(): Promise<void> {
    if (!this.hubConnection) {
      return;
    }

    try {
      await this.hubConnection.stop();
      this.isConnected = false;
      this.isConnecting = false;
      this.notifyStateChange(false);
      console.log('WebSocketChat: Disconnected from SignalR hub');
    } catch (error) {
      console.error('WebSocketChat: Error stopping connection', error);
      throw error;
    }
  }

  public sendInferenceRequestAsync(): IStreamResult<WebSocketInferenceString> {
    if (!this.hubConnection || !this.isConnected) {
      throw new Error('Hub connection is not established');
    }

    const inferenceRequest = this.getInferenceRequestFromWebsocketMessages();
    const lastPrompt = this.webSocketChatMessages.find(s => s.id === inferenceRequest.chatMessages[inferenceRequest.chatMessages.length - 1]?.id);
    
    if (!lastPrompt) {
      throw new Error('No last prompt found');
    }

    let isFirstResponse = true;

    try {
        // delay 2 seconds
      console.log('ChatHubClient','Sending inference request', inferenceRequest);
      const stream = this.hubConnection.stream('InferenceRequest', inferenceRequest);

      const statusUpdate: WebSocketInferenceStatusUpdate = {
        messageId: inferenceRequest.chatMessages[inferenceRequest.chatMessages.length - 1]?.id || '',
        isComplete: true,
        success: true
      };

      this.notifyInferenceStatus(statusUpdate);
      return stream;
    } catch (error) {
      console.error('WebSocketChat: Error in inference request stream', error);
      this.completeResponse(lastPrompt, false);
      throw error;
    }
  }

  public addMessage(prompt: string): WebSocketChatMessage {
    const message: WebSocketChatMessage = {
      id: uuid(),
      prompt,
      conversationId: this.conversationId,
      isComplete: false,
      success: false,
      response: '',
      responseType: undefined
    };

    this.webSocketChatMessages.push(message);

    return message;
  }

  public clearMessages(): void {
    this.webSocketChatMessages = [];
  }

  public updateUserInput(input: string): void {
    this.userInput = input;
    this.canSend = input.trim().length > 0 && this.isConnected;
  }

  public setCanStop(canStop: boolean): void {
    this.canStop = canStop;
  }

  public updateLocalStorageSettings(settings: Partial<LocalStorageSettings>): void {
    this.localStorageSettings = { ...this.localStorageSettings, ...settings };
  }

  // Callback setters
  public setInferenceStringCallback(callback: InferenceStringCallback): void {
    this.onInferenceString = callback;
  }

  public setInferenceStatusCallback(callback: InferenceStatusCallback): void {
    this.onInferenceStatus = callback;
  }

  public setStateChangeCallback(callback: StateChangeCallback): void {
    this.onStateChange = callback;
  }

  // Private methods
  private async createHubConnection(): Promise<void> {
    const token = await this.accessTokenProvider();
    
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(this.connectionUrl, {
        accessTokenFactory: () => token || '',
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets
      })
      .configureLogging(LogLevel.Information)
      .build();

    this.setupHubConnection();
  }

  private setupHubConnection(): void {
    if (!this.hubConnection) return;

    // Handle inference status updates
    this.hubConnection.on('InferenceStatusUpdate', (statusUpdate: WebSocketInferenceStatusUpdate) => {
      const lastPrompt = this.webSocketChatMessages.find(cm => cm.id === statusUpdate.messageId);
      
      if (lastPrompt && statusUpdate.isComplete) {
        this.completeResponse(lastPrompt, statusUpdate.success);
      }

      this.notifyInferenceStatus(statusUpdate);
    });

    // Handle connection state changes
    this.hubConnection.onclose(() => {
      this.isConnected = false;
      this.isConnecting = false;
      this.notifyStateChange(false);
      console.log('WebSocketChat: Connection closed');
    });
  }

  private  getInferenceRequestFromWebsocketMessages(): InferenceRequest {
    const chatConversation: InferenceRequest = {
      id: this.conversationId,
      settings: this.localStorageSettings.inferenceSettings,
      systemMessage: this.localStorageSettings.systemMessage,
      chatMessages: []
    };

    for (const promptAndResponse of this.webSocketChatMessages) {
      const userMessage: ChatMessage = {
        id: promptAndResponse.id,
        message: promptAndResponse.prompt,
        role: 'user'
      };
      chatConversation.chatMessages.push(userMessage);

      if (promptAndResponse.isComplete && promptAndResponse.success) {
        const modelMessage: ChatMessage = {
          id: uuid(),
          message: promptAndResponse.response || '',
          role: 'assistant'
        };
        chatConversation.chatMessages.push(modelMessage);
      }
    }

    return chatConversation;
  }

  private addResponseString(message: WebSocketChatMessage, responseString: string): void {
    const currentResponse = message.response;
    const index = currentResponse.length < 2 ? 0 : currentResponse.length - 2;
    
    const head = currentResponse.substring(0, index);
    const tail = currentResponse.substring(index);
    
    const combinedTail = tail + responseString;
    const escapedTail = this.escapeSpecialCharacters(combinedTail, message.responseType);
    
    message.response = head + escapedTail;
  }

  private completeResponse(message: WebSocketChatMessage, success: boolean): void {
    message.isComplete = true;
    message.success = success;
  }

  private setResponseType(message: WebSocketChatMessage, firstChar: string): boolean {
    let isSet = false;
    let responseType: string | undefined;

    switch (firstChar) {
      case '0':
        responseType = 'text';
        break;
      case '1':
        responseType = 'json';
        break;
      case '2':
        responseType = 'html';
        break;
      case '3':
        responseType = 'markdown';
        break;
    }

    if (responseType) {
      message.responseType = responseType;
      isSet = true;
    }

    return isSet;
  }

  private setResponseTypeBasedOnContent(message: WebSocketChatMessage, response: string): void {
    if (response.includes('<html') || response.includes('div')) {
      this.setResponseType(message, '2');
    } else if (response.includes('{')) {
      this.setResponseType(message, '1');
    } else if (response.includes('*') || response.includes('#')) {
      this.setResponseType(message, '3');
    } else {
      this.setResponseType(message, '0');
    }
  }

  private escapeSpecialCharacters(responseString: string, responseType?: string): string {
    if (responseType === 'markdown') {
      responseString = responseString.replace(/\\n/g, '\n');
      responseString = responseString.replace(/\\\\/g, '\\');
    } else if (responseType === 'text') {
      responseString = responseString.replace(/\\n/g, '\n');
    } else {
      responseString = responseString.replace(/\\n/g, '\n');
      responseString = responseString.replace(/\\\\/g, '\\');
      responseString = responseString.replace(/\\"/g, '"');
    }
    return responseString;
  }

  private notifyInferenceString(data: WebSocketInferenceString): void {
    if (this.onInferenceString) {
      try {
        this.onInferenceString(data);
      } catch (error) {
        console.error('WebSocketChat: Error in inference string callback', error);
      }
    }
  }

  private notifyInferenceStatus(data: WebSocketInferenceStatusUpdate): void {
    if (this.onInferenceStatus) {
      try {
        this.onInferenceStatus(data);
      } catch (error) {
        console.error('WebSocketChat: Error in inference status callback', error);
      }
    }
  }

  private notifyStateChange(isConnected: boolean): void {
    if (this.onStateChange) {
      try {
        this.onStateChange(isConnected);
      } catch (error) {
        console.error('WebSocketChat: Error in state change callback', error);
      }
    }
  }

}

// Simplified Types and Interfaces
export interface WebSocketChatMessage {
  id: string;
  conversationId?: string;
  prompt: string;
  isComplete: boolean;
  success: boolean;
  responseType?: string;
  response: string;
}

export interface WebSocketInferenceString {
  inferenceString: string;
}

export interface WebSocketInferenceStatusUpdate {
  messageId: string;
  isComplete: boolean;
  success: boolean;
}

export interface ChatMessage {
  id: string;
  message: string;
  role: 'user' | 'assistant';
}

export interface InferenceSettings {
  temperature?: number;
  maxTokens?: number;
  topP?: number;
  frequencyPenalty?: number;
  presencePenalty?: number;
}

export interface InferenceRequest {
  id: string;
  settings: InferenceSettings;
  systemMessage: string;
  chatMessages: ChatMessage[];
}

export interface LocalStorageSettings {
  inferenceSettings: InferenceSettings;
  systemMessage: string;
  darkMode: boolean;
  settingsVersion: number;
}

// Callback function types
export type InferenceStringCallback = (data: WebSocketInferenceString) => void;
export type InferenceStatusCallback = (data: WebSocketInferenceStatusUpdate) => void;
export type StateChangeCallback = (isConnected: boolean) => void;