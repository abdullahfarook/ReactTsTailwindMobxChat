import { ApiService } from "@/core/api";
import { toHumanReadable } from "@/core/utils";
import { TConversation } from "@/models/conversation";
import { Message } from "@/models/message";
import { makeAutoObservable, runInAction } from "mobx";
import { inject } from "react-ioc";
import { v4 as uuid } from 'uuid';
import { SessionStore } from "./Session";
import { NavStore } from "@/stores/NavStore";
import { ChatHub } from "@/hubs/ChatHub";

export class ChatStore {
    apiService = inject(this, ApiService);
    session = inject(this, SessionStore);
    nav = inject(this, NavStore);
    chatHub = new ChatHub(`${this.apiService.baseUrl}/Hubs/ChatServicesHub`,async ()=> this.session.tokens.accessToken);

    convsLoading = true;
    chatLoading = false;
    activeConvId?: string;
    conversations: TConversation[] = [];
    messages: Message[] = [];
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
        makeAutoObservable(this);
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
            this.activeConvId = undefined
            return;
        }
        this.activeConvId = conversationId;
        this.chatLoading = true;
        await new Promise(resolve => setTimeout(resolve, 500));
        runInAction(() => {
            this.messages = this.allMessages.filter(m => m.conversationId === conversationId);
            this.chatLoading = false;
        })

    }
    async submitChatMessage(message: string) {
        if (!this.activeConvId) {
            this.createConversation(message);
        }

    }

    createConversation(message: string) {
        const newConv: TConversation = {
            id: uuid(),
            // trim to 4 words
            title: message.split(' ').slice(0, 4).join(' '),
            updatedOn: new Date(),
            messages: [],

        }
        this.conversations.push(newConv);

        const userMessage: Message = {
            id: uuid(),
            conversationId: newConv.id,
            sender: this.session.firstName,
            role: "user",
            content: message,
            isComplete: false,
            isSuccess: true,
            responseType: "markdown",
            updatedOn: new Date()
        }
        const agentMessage: Message = {
            id: uuid(),
            parentId: userMessage.id,
            sender: "GPT-4o",
            role: "agent",
           
            isComplete: false,
            isSuccess: true,
            updatedOn: new Date()
        }
        userMessage.response = agentMessage;
        this.allMessages.push(userMessage);

        this.lastMessage = agentMessage;
        this.allMessages.push(agentMessage);

        this.updateChatStore();
        this.nav.navigate(`/chat/${newConv.id}`);
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