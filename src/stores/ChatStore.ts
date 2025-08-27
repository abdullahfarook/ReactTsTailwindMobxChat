import { ApiService } from "@/core/api";
import { toHumanReadable } from "@/core/utils";
import { TConversation } from "@/models/conversation";
import { Message } from "@/models/message";
import { computed, makeObservable, observable, runInAction } from "mobx";
import { inject } from "react-ioc";
import { v4 as uuid } from 'uuid';
import { SessionStore } from "./Session";
import { NavigationSrv } from "@/services/NavigationSrv";
import { ChatHub, WebSocketChatMessage, WebSocketInferenceString } from "@/hubs/ChatHub";
import { IStreamResult } from "@microsoft/signalr";

export class ChatStore {
    // injects
    apiService = inject(this, ApiService);
    session = inject(this, SessionStore);
    nav = inject(this, NavigationSrv);
    chatHub = new ChatHub(`${this.apiService.baseUrl}/Hubs/ChatServicesHub`,async ()=> this.session.tokens.accessToken);

    // observables
    @observable convsLoading = true;
    @observable chatLoading = false;
    @observable conversations: TConversation[] = [];
    @observable private allMessages: Message[] = [];
    @observable activeConvId?: string;

    // properties
    stream: IStreamResult<WebSocketInferenceString> | undefined;

    // computed
    @computed
    get lastMessage(): Message | undefined {
        return this.messages[this.messages.length - 1];
    }

    @computed
    get messages(): Message[] {
        return this.allMessages.filter(m => m.conversationId === this.activeConvId)??[];
    }



    get convsByDate(): [string, TConversation[]][] {
        // sort descending
        const convs = this.conversations?.slice()?.sort((a, b) => new Date(b.updatedOn).getTime() - new Date(a.updatedOn).getTime());
        const val = convs.slice()?.sort()?.reduce((acc, curr) => {
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
        makeObservable(this);
        this.chatHub.startAsync();
    }

    async loadConversations() {
        await new Promise(resolve => setTimeout(resolve, 500));

        runInAction(() => {
            this.conversations = localStorage.getItem('conversations') ? JSON.parse(localStorage.getItem('conversations')!) : [];
            this.allMessages = localStorage.getItem('messages') ? JSON.parse(localStorage.getItem('messages')!) : [];
            this.convsLoading = false;
        })

    }

    async loadChat(conversationId: string) {
        if (conversationId === 'new') {
            runInAction(() =>  this.activeConvId = undefined);
            return;
        }
        runInAction(() => {
            this.chatLoading = true;
            this.activeConvId = conversationId;
        });
        await new Promise(resolve => setTimeout(resolve, 500));
        runInAction(() => {
            this.chatLoading = false;
        })

    }
    async submitChatMessage(message: string) {
        if (!this.activeConvId) {
            this.createNewConversation(message);
        }else{
            this.addMessageToConversation(message);
        }
        this.updateConvDate();
    }
    private updateConvDate() {
        const conversation = this.conversations.find(c => c.id === this.activeConvId);
        if(!conversation) return;
        runInAction(() => conversation!.updatedOn = new Date());
        this.updateConversations();
    }

    addMessageToConversation(message: string) {
        const newMessage = this.createUserMessage(message,this.activeConvId!);
        runInAction(() => this.allMessages.push(newMessage));
        this.updateChatStore();
        this.askPrompt(message,this.activeConvId!,this.messages);
        this.nav.navigate(`/chat/${this.activeConvId}`);
    }

    createNewConversation(message: string) {
        runInAction(() => this.chatLoading = true);
        const newConv: TConversation = this.createNewConv(message);
        const messages = [...newConv.messages??[]];
        newConv.messages = undefined;
        this.conversations.push(newConv);
        runInAction(() => this.allMessages = this.allMessages.concat(messages));
        this.updateChatStore();
        this.askPrompt(message,newConv.id,[]);
        this.nav.navigate(`/chat/${newConv.id}`);
    }

    private createNewConv(message: string):TConversation {
        const newConvId = uuid();
        const newConv: TConversation = {
            id: newConvId,
            // trim to 4 words
            title: message.split(' ').slice(0, 7).join(' '),
            updatedOn: new Date(),
            messages: [this.createUserMessage(message,newConvId)],
        };
        return newConv;
    }
    private createUserMessage(message: string, conversationId: string) {
        const newMessageId = uuid();
        const newMessage: Message = {
            id: newMessageId,
            conversationId: conversationId,
            sender: this.session.firstName,
            role: "user",
            content: message,
            isComplete: true,
            isSuccess: true,
            responseType: "markdown",
            updatedOn: new Date(),
            response: {
                id: uuid(),
                parentId: newMessageId,
                conversationId: conversationId,
                sender: "Catalyst GPT",
                role: "agent",
                isComplete: false,
                isSuccess: true,
                responseType: "markdown",
                updatedOn: new Date()
            }
        };
        return newMessage;
    }

    private askPrompt(message: string, conversationId: string,messages: Message[]) {
        this.chatHub.initialize(conversationId, this.convertToWebSocketChatMessage(messages));
        this.chatHub.addMessage(message);
        this.stream = this.chatHub.sendInferenceRequestAsync();

        this.stream.subscribe({
            next: (result) => {
                if (!this.lastMessage) return;

                runInAction(() => {
                    this.lastMessage!.response = {
                        ...this.lastMessage!.response,
                        content: (this.lastMessage!.response?.content ?? '') + result.inferenceString,
                    } as Message;

                    this.updateMessages();

                });
            },
            complete: () => {
                if(!this.lastMessage) return;
                runInAction(() => {
                    this.lastMessage!.response = {
                        ...this.lastMessage!.response,
                        isComplete: true,
                    } as Message;
                });
                this.updateMessages();
            },
            error: (error) => {
                console.error(error);
            }
        });
        
    }

    convertToWebSocketChatMessage(messages: Message[]):WebSocketChatMessage[] {
        const webSocketChatMessages: WebSocketChatMessage[] = [];
        for (const message of messages) {
            if(message.role === "user"){
                const userMessage: WebSocketChatMessage = {
                    id: message.id,
                    prompt: message.content??'',
                    isComplete: true,
                    response: '',
                    success: message.isSuccess,
                }
                webSocketChatMessages.push(userMessage);
            }
            if(message.role === "agent"){
                const agentMessage: WebSocketChatMessage = {
                    id: message.id,
                    response: message.content??'',
                    isComplete: true,
                    prompt: '',
                    success: message.isSuccess,
                }
                webSocketChatMessages.push(agentMessage);
            }
        }
        return webSocketChatMessages;
    }

    updateChatStore() {
        this.updateConversations();
        this.updateMessages();
    }

    updateConversations() {
        // in local storage
        localStorage.setItem('conversations', JSON.stringify(this.conversations));
    }

    updateMessages() {
        // in local storage
        localStorage.setItem('messages', JSON.stringify(this.allMessages));
    }
}