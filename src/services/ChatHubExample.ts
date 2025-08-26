import { ChatHub } from '@/hubs/ChatHub';
import React from 'react';

// Example usage of the simplified WebSocketChat with callback approach
export class WebSocketChatExample {
    private chat: ChatHub;

    constructor() {
        // Initialize WebSocketChat with connection URL and token provider
        const connectionUrl = "https://localhost:5001/Hubs/ChatServicesHub";
        const accessTokenProvider = async (): Promise<string | null> => {
            return localStorage.getItem('accessToken');
        };

        this.chat = new ChatHub(connectionUrl, accessTokenProvider);
        this.setupCallbacks();
    }

    private setupCallbacks() {
        // Handle streaming inference responses
        this.chat.setInferenceStringCallback((data) => {
            console.log('Received streaming response:', data.inferenceString);
            // Update UI with streaming content
        });

        // Handle inference completion status
        this.chat.setInferenceStatusCallback((data) => {
            console.log('Inference completed:', data);
            if (data.isComplete) {
                // Handle completion
            }
        });

        // Handle connection state changes
        this.chat.setStateChangeCallback((isConnected) => {
            console.log('Connection state:', isConnected ? 'Connected' : 'Disconnected');
            // Update UI connection status
        });
    }

    async startChat() {
        try {
            // Start the WebSocket connection
            await this.chat.startAsync();
            console.log('Chat started successfully');
        } catch (error) {
            console.error('Failed to start chat:', error);
        }
    }

    async sendMessage(message: string) {
        if (!this.chat.canSend) {
            console.log('Cannot send message - check connection and input');
            return;
        }

        try {
            // Add message to chat
            const chatMessage = this.chat.addMessage(message);
            console.log('Message added:', chatMessage);

            // Send inference request
            await this.chat.sendInferenceRequestAsync();
        } catch (error) {
            console.error('Failed to send message:', error);
        }
    }

    async stopChat() {
        try {
            await this.chat.stopAsync();
            console.log('Chat stopped successfully');
        } catch (error) {
            console.error('Failed to stop chat:', error);
        }
    }

    updateUserInput(input: string) {
        this.chat.updateUserInput(input);
    }

    updateSettings(settings: any) {
        this.chat.updateLocalStorageSettings(settings);
    }

    // Get current state
    getState() {
        return {
            isConnected: this.chat.isConnected,
            isConnecting: this.chat.isConnecting,
            canSend: this.chat.canSend,
            canStop: this.chat.canStop,
            userInput: this.chat.userInput,
            messages: this.chat.webSocketChatMessages,
            settings: this.chat.localStorageSettings
        };
    }
}

// Simple React hook example with callback approach
export function useWebSocketChat() {
    const [chat] = React.useState(() => new WebSocketChatExample());
    const [state, setState] = React.useState(chat.getState());

    React.useEffect(() => {
        // Update state when chat properties change
        const interval = setInterval(() => {
            setState(chat.getState());
        }, 100);

        return () => clearInterval(interval);
    }, [chat]);

    return {
        chat,
        state,
        sendMessage: chat.sendMessage.bind(chat),
        startChat: chat.startChat.bind(chat),
        stopChat: chat.stopChat.bind(chat),
        updateUserInput: chat.updateUserInput.bind(chat),
        updateSettings: chat.updateSettings.bind(chat)
    };
}

// Functional approach example
export function createWebSocketChat(
    connectionUrl: string,
    onInferenceString?: (data: any) => void,
    onInferenceStatus?: (data: any) => void,
    onStateChange?: (isConnected: boolean) => void
) {
    const accessTokenProvider = async (): Promise<string | null> => {
        return localStorage.getItem('accessToken');
    };

    const chat = new ChatHub(connectionUrl, accessTokenProvider);
    
    // Set up callbacks if provided
    if (onInferenceString) {
        chat.setInferenceStringCallback(onInferenceString);
    }
    if (onInferenceStatus) {
        chat.setInferenceStatusCallback(onInferenceStatus);
    }
    if (onStateChange) {
        chat.setStateChangeCallback(onStateChange);
    }

    return {
        chat,
        start: () => chat.startAsync(),
        stop: () => chat.stopAsync(),
        sendMessage: (message: string) => {
            chat.addMessage(message);
            return chat.sendInferenceRequestAsync();
        },
        updateInput: (input: string) => chat.updateUserInput(input),
        updateSettings: (settings: any) => chat.updateLocalStorageSettings(settings),
        getState: () => ({
            isConnected: chat.isConnected,
            canSend: chat.canSend,
            messages: chat.webSocketChatMessages,
            userInput: chat.userInput
        })
    };
}
