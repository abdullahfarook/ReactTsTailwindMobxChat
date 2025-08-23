import { ChatStore } from "@/stores/ChatStore";
import DetailHeader from "./compnents/DetailHeader";
import { Original } from "./compnents/Message";
import { useInstance } from "react-ioc";
import { observer } from "mobx-react";
/* @ts-ignore */
import ChatInput from "./compnents/ChatInput";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "@/components/Spinner";
import { TMessage } from "@/models/message";
import { EditIcon, MenuIcon } from "lucide-react";

function Detail() {
    const chat = useInstance(ChatStore);
    const { conversationId } = useParams();
    useEffect(() => {
        chat.loadChat(conversationId!);
    }, [conversationId]);

    return <>
        <DetailHeader />
        <div className="relative flex h-full max-w-full flex-1 flex-col overflow-hidden">
            <main className="flex h-full flex-col overflow-y-auto" role="main">
                <div className="flex h-full w-full flex-col">
                    <div className="flex flex-col h-full overflow-y-auto">
                        {chat.chatLoading && LoadingSpinner}
                        {!chat.chatLoading &&
                            <>
                                <Messages data={chat.messages} />
                                <ChatInput />
                            </>}
                    </div>
                </div>
            </main>
        </div>
    </>
}
const LoadingSpinner = (
    <div className="flex flex-1 h-screen items-center justify-center" aria-live="polite" role="status">
        <Spinner className="text-text-primary" />
        {/* <span className="animate-pulse text-text-primary ml-1">Loading...</span> */}
    </div>
);
const Messages = (props: { data: TMessage[] }) => (
    <div className="relative flex-1 overflow-hidden overflow-y-auto">
        {props.data?.map((message) => <Original key={message.id} data={message} />)}
    </div>
)

export default observer(Detail);