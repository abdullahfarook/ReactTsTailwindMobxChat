import { toArray, toHumanReadable } from "@/core/utils";
import { TMessage } from "@/models/message";
import { makeAutoObservable, observable, runInAction } from "mobx";

const convs: TMessage[] = [
    {
        id: "995db14f-1359-4784-b27b-8ce3d7f34600",

        content: "Riverpod Alternatives for React",
        sender: "Abdullah",
        role: "user",
        updatedOn: new Date(),
    },
    {
        id: "6736b91f-e3df-4738-bade-0582d732b2f6",
        content: "Yolo Greetings and Assistance",
        sender: "GPT-4o",
        role: "agent",
        updatedOn: new Date(),
    },
    {
        id: "8f31f893-b2cd-46de-926c-c49ea5fe6652",
        content: "Friendly Greetings and Assistance",
        sender: "Abdullah",
        role: "user",
        updatedOn: new Date(),
    },
    {
        id: "995db14f-1359-4784-b27b-8ce3d7f34601",
        content: "Greeting and Assistance Inquiry",
        sender: "Abdullah",
        role: "user",
        updatedOn: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
    }
]
export class ChatStore {
    conversationsLoading = true;
    chatLoading = false;
    conversations: TMessage[] = [];
    activeConversation: TMessage | null = null;
    
    get conversationsByDate(): [string, TMessage[]][] {
        const val = this.conversations.reduce((acc, curr) => {
            const key = toHumanReadable(curr.updatedOn);
            if (acc.has(key)) {
                acc.get(key)?.push(curr);
            } else {
                acc.set(key, [curr]);
            }
            return acc;
        }, new Map<string, TMessage[]>());
        console.log(val);
        return [...val];

    }
    get activeConversationId(): string | null {
        return this.activeConversation?.id ?? null;
    }

    // private _conversations: TMessage[] = [];
    // private _currentChat: TMessage | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    async loadConversations() {
        // delay for 1000 seconds
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.conversations = convs;
        this.conversationsLoading = false;

    }
    async loadChat(conversationId: string) {
        const convo = this.conversations.find(c => c.id === conversationId);
        if (!convo) return;
        this.activeConversation = convo;
    }
}