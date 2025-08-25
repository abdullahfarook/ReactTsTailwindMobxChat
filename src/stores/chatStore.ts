import { ApiService } from "@/core/api";
import { toHumanReadable } from "@/core/utils";
import { convs, TConversation } from "@/models/conversation";
import { chatMessages, Message } from "@/models/message";
import { makeAutoObservable, runInAction } from "mobx";
import { inject } from "react-ioc";
import {v4 as uuid} from 'uuid';
import { SessionStore } from "./Session";
import { NavStore } from "@/stores/NavStore";

export class ChatStore {
    apiService = inject(this, ApiService);
    session = inject(this, SessionStore);
    nav = inject(this, NavStore);

    convsLoading = true;
    chatLoading = false;
    activeConvId?: string;
    conversations: TConversation[] = [];
    messages: Message[] = [];
    allMessages: Message[] = [];
    lastMessage: Message | undefined;

    get convsByDate(): [string, TConversation[]][] {
        const val = this.conversations?.reduce((acc, curr) => {
            const key = toHumanReadable(curr.updatedOn);
            if (acc.has(key)) {
                acc.get(key)?.push(curr);
            } else {
                acc.set(key, [curr]);
            }
            return acc;
        }, new Map<string, TConversation[]>())??[];
        return [...val];

    }

    constructor() {
        makeAutoObservable(this);
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
        if(conversationId === 'new'){
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
        if(!this.activeConvId ){
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
        this.allMessages.push(userMessage);
        
        const agentMessage: Message = {
            id: uuid(),
            conversationId: newConv.id,
            sender: "GPT-4o",
            role: "agent",
            content: '',
            isComplete: false,
            isSuccess: true,
            updatedOn: new Date()
        }
        userMessage.response = agentMessage;
        this.lastMessage = agentMessage;
        this.allMessages.push(agentMessage);

        this.updateChatStore();
        this.nav.navigate(`/chat/${newConv.id}`);
    }

    updateChatStore(){
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