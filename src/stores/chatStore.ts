import { ApiService } from "@/core/api";
import { toHumanReadable } from "@/core/utils";
import { TConversation } from "@/models/conversation";
import { Message } from "@/models/message";
import { makeObservable, observable, runInAction } from "mobx";
import { inject } from "react-ioc";
import { v4 as uuid } from 'uuid';
import { SessionStore } from "./Session";
import { NavStore } from "@/stores/NavStore";
import { ChatHub } from "@/hubs/ChatHub";

export class ChatStore {
    // injects
    apiService = inject(this, ApiService);
    session = inject(this, SessionStore);
    nav = inject(this, NavStore);
    chatHub = new ChatHub(`${this.apiService.baseUrl}/Hubs/ChatServicesHub`,async ()=> this.session.tokens.accessToken);

    // observables
    @observable convsLoading = true;
    @observable chatLoading = false;
    @observable.shallow conversations: TConversation[] = [];
    @observable messages: Message[] = [];

    // properties
    @observable activeConvId?: string;
    allMessages: Message[] = [];
    lastMessage: Message | undefined;

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
            this.messages = this.allMessages.filter(m => m.conversationId === conversationId);
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
        const newConv: TConversation = this.createNewConv(message);
        const messages = [...newConv.messages??[]];
        newConv.messages = undefined;
        this.conversations.push(newConv);
        this.allMessages =this.allMessages.concat(messages);
        this.lastMessage = messages![messages!.length - 1];
        this.updateChatStore();
        // this.ask(message);
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
                isComplete: false,
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

    // private ask(message: string) {
    //     try {
    //         this.chatHub.initialize(newConv.id, []);
    //         this.chatHub.addMessage(message);
    //         const stream = this.chatHub.sendInferenceRequestAsync();
    //         stream.subscribe({
    //             next: (data) => {
    //                 runInAction(() => {
    //                     const chunk = data?.inferenceString ?? "";
    //                     this.lastMessage = agentMessage;
    //                     agentMessage.content = (agentMessage.content ?? "") + chunk;
    //                     agentMessage.updatedOn = new Date();
    //                     this.updateMessages();
    //                 });
    //             },
    //             complete: () => {
    //                 runInAction(() => {
    //                     agentMessage.isComplete = true;
    //                     agentMessage.isSuccess = true;
    //                     agentMessage.updatedOn = new Date();
    //                     newConv.updatedOn = new Date();
    //                     this.updateChatStore();
    //                 });
    //             },
    //             error: () => {
    //                 runInAction(() => {
    //                     agentMessage.isComplete = true;
    //                     agentMessage.isSuccess = false;
    //                     agentMessage.updatedOn = new Date();
    //                     this.updateChatStore();
    //                 });
    //             }
    //         });
    //     } catch {
    //         runInAction(() => {
    //             agentMessage.isComplete = true;
    //             agentMessage.isSuccess = false;
    //             agentMessage.updatedOn = new Date();
    //             this.updateChatStore();
    //         });
    //     }
    // }

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