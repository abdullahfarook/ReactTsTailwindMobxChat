import Markdown from "@/components/Markdown";
import { TMessage } from "@/models/message";
import { OpenAIMinimalIcon, UserIcon } from "@/components/svgs";
import ReactMarkdown from "react-markdown";



type Props = {
    data: TMessage;
}

export const Message = (props: Props) => {
    const message = props.data;
    
    return <>
        <div className="text-token-text-primary w-full border-0 bg-transparent dark:border-0 dark:bg-transparent">
            <div className="m-auto justify-center p-4 py-2 md:gap-6">
                <div id="c4339f98-5da5-454c-b221-4b2814fcfc3a" aria-label="message-6-c4339f98-5da5-454c-b221-4b2814fcfc3a" className="group mx-auto flex flex-1 gap-3 transition-all duration-300 transform-gpu md:max-w-[47rem] xl:max-w-[55rem] focus:outline-none focus:ring-2 focus:ring-border-xheavy message-render">
                    <div className="relative flex flex-shrink-0 flex-col items-center">
                        <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                            <div  className="relative flex items-center justify-center" style={{ "width": "28.8px", "height": "28.8px" }}>
                                <div className="relative flex h-9 w-9 items-center justify-center rounded-sm p-1 text-white" style={{
                                    "backgroundColor": "rgb(121, 137, 255)", "width": "20px", "height": "20px", "boxShadow":
                                        "rgba(240, 246, 252, 0.1) 0px 0px 0px 1px"
                                }}>
                                    <UserIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex w-11/12 flex-col user-turn">
                        <h2 className="select-none font-semibold text-base">{message.sender}</h2>
                        <div className="flex flex-col gap-1">
                            <div className="flex max-w-full flex-grow flex-col gap-0">
                                <div className="text-message flex min-h-[20px] flex-col items-start gap-3 overflow-visible [.text-message+&amp;]:mt-5" dir="auto">
                                    <div className="markdown prose message-content dark:prose-invert light w-full break-words dark:text-gray-20">
                                        <p className="mb-2 whitespace-pre-wrap">{message.content}</p>
                                    </div>
                                </div>
                            </div><span></span></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-token-text-primary w-full border-0 bg-transparent dark:border-0 dark:bg-transparent">
            <div className="m-auto justify-center p-4 py-2 md:gap-6">
                <div id="59f0b8f9-556e-462d-a2a1-848cfd5269b3" aria-label="message-7-59f0b8f9-556e-462d-a2a1-848cfd5269b3" className="group mx-auto flex flex-1 gap-3 transition-all duration-300 transform-gpu md:max-w-[47rem] xl:max-w-[55rem] focus:outline-none focus:ring-2 focus:ring-border-xheavy message-render">
                    <div className="relative flex flex-shrink-0 flex-col items-center">
                        <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                            <div title="ChatGPT" className="relative flex h-9 w-9 items-center justify-center rounded-sm p-1 text-white" style={{ "background": "rgb(171, 104, 255)", "width": "28.8px", "height": "28.8px" }}>
                                <OpenAIMinimalIcon />
                            </div>
                        </div>
                    </div>
                    <div className="relative flex w-11/12 flex-col agent-turn">
                        <h2 className="select-none font-semibold text-base">{message.response?.sender}</h2>
                        <div className="flex flex-col gap-1">
                            <div className="flex max-w-full flex-grow flex-col gap-0">
                                <div className="text-message flex min-h-[20px] flex-col items-start gap-3 overflow-visible [.text-message+&amp;]:mt-5" dir="auto">
                                    <div className="markdown prose message-content dark:prose-invert light w-full break-words dark:text-gray-100">
                                        <div className="max-h-full overflow-y-auto">
                                            <Markdown>{message.response?.content}</Markdown>
                                        </div>
                                    </div>
                                </div>
                            </div><span></span></div>
                    </div>
                </div>
            </div>
        </div>
    </>
}



export const MessageItem = (message: TMessage) => {
    const isAgent = message.role === "agent";

    return (
        <div className="w-full border-0 bg-transparent">
            <div className="m-auto p-4 py-2 flex gap-3 md:gap-6 max-w-3xl">
                {/* Avatar */}
                <div className="flex-shrink-0">
                    <div
                        className="flex h-9 w-9 items-center justify-center rounded-full text-white"
                        style={{
                            background: isAgent ? "rgb(171,104,255)" : "rgb(59,130,246)"
                        }}
                    >
                        {message.sender[0]}
                    </div>
                </div>

                {/* Message body */}
                <div className="flex-1 flex flex-col">
                    <h2 className="font-semibold text-base">{message.sender}</h2>
                    <div className="prose dark:prose-invert max-w-full break-words">
                        <ReactMarkdown>{message.content}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    );
};