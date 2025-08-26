import { ApiService } from "@/core/api";
import { toHumanReadable } from "@/core/utils";
import { TConversation } from "@/models/conversation";
import { Message } from "@/models/message";
import { computed, makeObservable, observable, runInAction } from "mobx";
import { inject } from "react-ioc";
import { v4 as uuid } from 'uuid';
import { SessionStore } from "./Session";
import { NavigationSrv } from "@/services/NavigationSrv";
import { ChatHub, WebSocketInferenceString } from "@/hubs/ChatHub";
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
    @observable.shallow conversations: TConversation[] = [];
    @observable private _allMessages: Message[] = [];
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
        return this._allMessages.filter(m => m.conversationId === this.activeConvId)??[];
    }



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
        makeObservable(this);
        this.chatHub.startAsync();
    }

    async loadConversations() {
        await new Promise(resolve => setTimeout(resolve, 500));

        runInAction(() => {
            this.conversations = localStorage.getItem('conversations') ? JSON.parse(localStorage.getItem('conversations')!) : [];
            this._allMessages = localStorage.getItem('messages') ? JSON.parse(localStorage.getItem('messages')!) : [];
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
            // this.convMessages = this.allMessages.filter(m => m.conversationId === conversationId);
            this.chatLoading = false;
        })

    }
    async submitChatMessage(message: string) {
        if (!this.activeConvId) {
            this.createNewConversation(message);
        }else{
            this.addMessageToConversation(message);
        }
    }
    addMessageToConversation(message: string) {
        
    }

    createNewConversation(message: string) {
        runInAction(() => this.chatLoading = true);
        const newConv: TConversation = this.createNewConv(message);
        const messages = [...newConv.messages??[]];
        newConv.messages = undefined;
        this.conversations.push(newConv);
        this._allMessages = this._allMessages.concat(messages);
        // this.convMessages = messages;
        
        // this.lastMessage = messages![messages!.length - 1];
        this.updateChatStore();
        this.askPrompt(message,newConv.id);
        this.nav.navigate(`/chat/${newConv.id}`);
    }

    private createNewConv(message: string):TConversation {
        const newConvId = uuid();
        const newMessageId = uuid();
        const newConv: TConversation = {
            id: newConvId,
            // trim to 4 words
            title: message.split(' ').slice(0, 4).join(' '),
            updatedOn: new Date(),
            messages: [{
                id: newMessageId,
                conversationId: newConvId,
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
                    conversationId: newConvId,
                    sender: "GPT-4o",
                    role: "agent",
                    isComplete: false,
                    isSuccess: true,
                    responseType: "markdown",
                    updatedOn: new Date()
                }
            }],
        };
        return newConv;
    }

    private askPrompt(message: string, id: string) {
        this.chatHub.initialize(id, []);
        this.chatHub.addMessage(message);
        this.stream = this.chatHub.sendInferenceRequestAsync();

        this.stream.subscribe({
            next: (result) => {
                console.log("Received: ",result.inferenceString);
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
        localStorage.setItem('messages', JSON.stringify(this._allMessages));
    }
}