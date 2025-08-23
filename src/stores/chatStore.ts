import { ApiService } from "@/core/api";
import { toHumanReadable } from "@/core/utils";
import { convs, TConversation } from "@/models/conversation";
import { chatMessages, TMessage } from "@/models/message";
import { makeAutoObservable, observable, runInAction } from "mobx";
import { inject } from "react-ioc";

export class ChatStore {
    apiService = inject(this, ApiService);

    convsLoading = true;
    chatLoading = false;
    activeConvId?: string;
    conversations: TConversation[] = [];
    messages: TMessage[] = [];

    get convsByDate(): [string, TConversation[]][] {
        const val = this.conversations.reduce((acc, curr) => {
            const key = toHumanReadable(curr.updatedOn);
            if (acc.has(key)) {
                acc.get(key)?.push(curr);
            } else {
                acc.set(key, [curr]);
            }
            return acc;
        }, new Map<string, TConversation[]>());
        return [...val];

    }

    constructor() {
        makeAutoObservable(this);
    }

    async loadConversations() {
        await new Promise(resolve => setTimeout(resolve, 2000));
        runInAction(() => {
            this.conversations = convs;
            this.convsLoading = false;
        })

    }

    async loadChat(conversationId: string) {
        this.activeConvId = conversationId;
        this.chatLoading = true;
        await new Promise(resolve => setTimeout(resolve, 2000));
        runInAction(() => {
            this.messages = chatMessages.filter(m => m.conversationId === conversationId);
            this.chatLoading = false;
        })
        
    }
}