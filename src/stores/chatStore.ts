import { toHumanReadable } from "@/core/utils";
import { convs, TConversation } from "@/models/conversation";
import { chatMessages } from "@/models/message";
import { makeAutoObservable } from "mobx";

export class ChatStore {
    convsLoading = true;
    chatLoading = false;
    convs: TConversation[] = [];
    activeConv: TConversation | null = null;

    get convsByDate(): [string, TConversation[]][] {
        const val = this.convs.reduce((acc, curr) => {
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
    get activeConvId(): string | null {
        return this.activeConv?.id ?? null;
    }

    // private _conversations: TConversation[] = [];
    // private _currentChat: TConversation | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    *loadConversations() {
        yield new Promise(resolve => setTimeout(resolve, 2000));
        this.convs = convs;
        this.convsLoading = false;

    }

    *loadChat(conversationId: string) {
        const convo = this.convs.find(c => c.id === conversationId);
        if (!convo) return;
        this.chatLoading = true;
        this.activeConv = convo;
        yield new Promise(resolve => setTimeout(resolve, 2000));
        this.activeConv.messages = chatMessages ?? [];
        this.chatLoading = false;
        
    }
}