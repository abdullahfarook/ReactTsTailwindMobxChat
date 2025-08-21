import { makeAutoObservable, observable, runInAction } from "mobx";


export class ChatStore {
    private _conversationsLoading = false;
    private _chatLoading = false;
    // private _conversations: TMessage[] = [];
    // private _currentChat: TMessage | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    async loadConversations() {
        // const res = await api.fetchGet<TMessage[]>('/api/conversations');
        // if (res.success) {
        //     this._conversations = res.data??[];
        // }
    }
    async loadChat(conversationId: string) {
        // const res = await api.fetchGet<TMessage>(`/api/conversations/${conversationId}`);
        // if (res.success) {
        //     this._currentChat = res.data??null;
        // }
    }
}