import { ApiService } from "@/core/api";
import { toHumanReadable } from "@/core/utils";
import { TConversation } from "@/models/conversation";
import { Message } from "@/models/message";
import { makeAutoObservable, runInAction } from "mobx";
import { inject } from "react-ioc";
import { v4 as uuid } from 'uuid';
import { SessionStore } from "./Session";
import { NavStore } from "@/stores/NavStore";
import { ChatHub, WebSocketChatMessage, WebSocketInferenceStatusUpdate, WebSocketInferenceString } from "@/hubs/ChatHub";

export class ChatStore {
    apiService = inject(this, ApiService);
    session = inject(this, SessionStore);
    nav = inject(this, NavStore);

    // Chat state
    convsLoading = true;
    chatLoading = false;
    activeConvId?: string;
    conversations: TConversation[] = [];
    messages: Message[] = [];
    allMessages: Message[] = [];
    lastMessage: Message | undefined;

    // WebSocketChat integration
    private chatService?: ChatHub;
    userInput: string = '';
    canSend: boolean = true;
    canStop: boolean = false;
    isConnected: boolean = false;
    isConnecting: boolean = false;
    webSocketChatMessages: WebSocketChatMessage[] = [];

    // Local storage settings
    localStorageSettings = {
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

    get convsByDate(): [string, TConversation[]][] {
        // sort descending
        const convs = this.conversations?.slice()?.sort((a, b) => new Date(b.updatedOn).getTime() - new Date(a.updatedOn).getTime());
        const val = convs.slice()?.toSorted()?.reduce((acc, curr) => {
            const key = toHumanReadable(curr.updatedOn);
            if (acc.has(key)) {
                acc.get(key)?.push(curr);
            } else {
                acc.set(key, [curr]);
            }
            return acc;
        }, new Map<string, TConversation[]>()) ?? [];
        return [...val];
    }

    constructor() {
        makeAutoObservable(this, {
            apiService: false,
            session: false,
            nav: false
        });
        
        this.initializeWebSocketChat();  
    }

    private initializeWebSocketChat() {
        const connectionUrl = "https://localhost:5001/Hubs/ChatServicesHub"; // Adjust based on your backend
        const accessTokenProvider = async (): Promise<string | null> => {
            return localStorage.getItem('accessToken');
        };

        this.chatService = new ChatHub(connectionUrl, accessTokenProvider);
        
        // Setup event handlers
        this.setupWebSocketChatHandlers();
    }

    private setupWebSocketChatHandlers() {
        if (!this.chatService) return;

        // Handle inference string updates (streaming)
        this.chatService.setInferenceStringCallback((data: WebSocketInferenceString) => {
            runInAction(() => {
                // Find the agent message that's currently being streamed
                const agentMessage = this.allMessages.find(m => 
                    m.role === 'agent' && 
                    m.conversationId === this.activeConvId && 
                    !m.isComplete
                );
                
                if (agentMessage && data.inferenceString) {
                    // Update the agent message with streaming content
                    agentMessage.content = (agentMessage.content || '') + data.inferenceString;
                }
            });
        });

        // Handle inference status updates
        this.chatService.setInferenceStatusCallback((data: WebSocketInferenceStatusUpdate) => {
            runInAction(() => {
                // Find the agent message that corresponds to this status update
                const agentMessage = this.allMessages.find(m => 
                    m.role === 'agent' && 
                    m.conversationId === this.activeConvId &&
                    m.parentId // This links it to the user message
                );
                
                if (agentMessage) {
                    agentMessage.isComplete = data.isComplete;
                    agentMessage.isSuccess = data.success;
                    
                    if (data.isComplete) {
                        this.updateChatStore();
                    }
                }
            });
        });

        // Handle connection state changes
        this.chatService.setStateChangeCallback((isConnected: boolean) => {
            runInAction(() => {
                this.isConnected = isConnected;
                this.isConnecting = false;
            });
        });
    }

    async loadConversations() {
        await new Promise(resolve => setTimeout(resolve, 500));

        runInAction(() => {
            this.conversations = localStorage.getItem('conversations') ? JSON.parse(localStorage.getItem('conversations')!) : [];
            this.allMessages = localStorage.getItem('messages') ? JSON.parse(localStorage.getItem('messages')!) : [];
            this.convsLoading = false;
        });
    }

    async loadChat(conversationId: string) {
        if (conversationId === 'new') {
            this.activeConvId = undefined;
            return;
        }
        
        this.activeConvId = conversationId;
        this.chatLoading = true;
        
        await new Promise(resolve => setTimeout(resolve, 500));
        
        runInAction(() => {
            // Filter to only user messages for display, but include their responses
            const conversationMessages = this.allMessages.filter(m => m.conversationId === conversationId);
            this.messages = conversationMessages.filter(m => m.role === 'user');
            this.chatLoading = false;
        });

        // Initialize WebSocketChat with conversation data
        if (this.chatService) {
            const conversationMessages = this.convertAppMessagesToWebSocketMessages(this.messages);
            this.chatService.initialize(conversationId, conversationMessages);
            
            // Start connection if not already connected
            if (!this.isConnected && !this.isConnecting) {
                this.startConnection();
            }
        }
    }

    async submitChatMessage(message: string) {
        if (!this.activeConvId) {
            await this.createConversation(message);
        } else {
            await this.addMessageToExistingConversation(message);
        }
    }

    async createConversation(message: string) {
        const newConv: TConversation = {
            id: uuid(),
            title: message.split(' ').slice(0, 4).join(' '),
            updatedOn: new Date(),
            messages: [],
        };
        
        runInAction(() => {
            this.conversations.push(newConv);
            this.activeConvId = newConv.id;
        });

        const userMessage: Message = {
            id: uuid(),
            conversationId: newConv.id,
            sender: this.session.firstName,
            role: "user",
            content: message,
            isComplete: true,
            isSuccess: true,
            responseType: "markdown",
            updatedOn: new Date()
        };

        const agentMessage: Message = {
            id: uuid(),
            parentId: userMessage.id,
            conversationId: newConv.id,
            sender: "GPT-4o",
            role: "agent",
            content: "",
            isComplete: false,
            isSuccess: true,
            responseType: "markdown",
            updatedOn: new Date()
        };

        userMessage.response = agentMessage;
        
        runInAction(() => {
            this.allMessages.push(userMessage, agentMessage);
            this.lastMessage = agentMessage;
            // Only add user messages to the messages array for display
            this.messages = [userMessage];
        });

        this.updateChatStore();
        this.nav.navigate(`/chat/${newConv.id}`);

        // Start connection and send message
        await this.startConnection();
        await this.sendMessageViaChatService(message);
    }

    async addMessageToExistingConversation(message: string) {
        if (!this.activeConvId) return;

        const userMessage: Message = {
            id: uuid(),
            conversationId: this.activeConvId,
            sender: this.session.firstName,
            role: "user",
            content: message,
            isComplete: true,
            isSuccess: true,
            responseType: "markdown",
            updatedOn: new Date()
        };

        const agentMessage: Message = {
            id: uuid(),
            parentId: userMessage.id,
            conversationId: this.activeConvId,
            sender: "GPT-4o",
            role: "agent",
            content: "",
            isComplete: false,
            isSuccess: true,
            responseType: "markdown",
            updatedOn: new Date()
        };

        userMessage.response = agentMessage;

        runInAction(() => {
            this.allMessages.push(userMessage, agentMessage);
            this.lastMessage = agentMessage;
            // Only add user messages to the messages array for display
            this.messages.push(userMessage);
        });

        this.updateChatStore();
        await this.sendMessageViaChatService(message);
    }

    private async startConnection() {
        if (!this.chatService || this.isConnected || this.isConnecting) return;

        try {
            runInAction(() => {
                this.isConnecting = true;
            });

            await this.chatService.startAsync();
        } catch (error) {
            console.error('Failed to start chat connection:', error);
            runInAction(() => {
                this.isConnecting = false;
            });
        }
    }

    private async sendMessageViaChatService(message: string) {
        if (!this.chatService) {
            console.error('WebSocketChat service not initialized');
            return;
        }

        // Try to connect if not connected
        if (!this.isConnected && !this.isConnecting) {
            await this.startConnection();
        }

        // Wait a bit for connection to establish
        let retryCount = 0;
        while (!this.isConnected && retryCount < 3) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            retryCount++;
        }

        if (!this.isConnected) {
            console.error('WebSocketChat not connected after retries');
            this.handleMessageError("Unable to connect to chat service.");
            return;
        }

        try {
            // Add message to WebSocketChat
            const webSocketMessage = this.chatService.addMessage(message);
            
            runInAction(() => {
                this.webSocketChatMessages.push(webSocketMessage);
            });

            // Send inference request
            await this.chatService.sendInferenceRequestAsync();
        } catch (error) {
            console.error('Failed to send message:', error);
            this.handleMessageError("Sorry, there was an error processing your message.");
        }
    }

    private handleMessageError(errorMessage: string) {
        const lastMessage = this.lastMessage;
        if (lastMessage) {
            runInAction(() => {
                lastMessage.isComplete = true;
                lastMessage.isSuccess = false;
                lastMessage.content = errorMessage;
            });
        }
    }



    private convertAppMessagesToWebSocketMessages(messages: Message[]): WebSocketChatMessage[] {
        return messages
            .filter(m => m.role === 'user')
            .map(m => ({
                id: m.id,
                conversationId: m.conversationId,
                prompt: m.content || '',
                responseStrings: [],
                isComplete: m.isComplete || false,
                success: m.isSuccess || false,
                response: m.response?.content || '',
                responseType: m.responseType
            }));
    }



    // WebSocketChat integration methods
    updateUserInput(input: string) {
        this.userInput = input;
        if (this.chatService) {
            this.chatService.updateUserInput(input);
        }
    }

    async stopGeneration() {
        if (this.chatService && this.canStop) {
            try {
                await this.chatService.stopAsync();
            } catch (error) {
                console.error('Failed to stop generation:', error);
            }
        }
    }

    updateLocalStorageSettings(settings: any) {
        this.localStorageSettings = { ...this.localStorageSettings, ...settings };
        if (this.chatService) {
            this.chatService.updateLocalStorageSettings(settings);
        }
    }

    // Cleanup method
    async cleanup() {
        if (this.chatService) {
            try {
                await this.chatService.stopAsync();
            } catch (error) {
                console.error('Error during cleanup:', error);
            }
        }
    }

    updateChatStore() {
        this.updateConversations();
        this.updateMessages();
    }

    updateConversations() {
        localStorage.setItem('conversations', JSON.stringify(this.conversations));
    }

    updateMessages() {
        localStorage.setItem('messages', JSON.stringify(this.allMessages));
    }
}