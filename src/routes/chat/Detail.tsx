import { ChatStore } from "@/stores/ChatStore";
import DetailHeader from "./compnents/DetailHeader";
import { Original } from "./compnents/Message";
import { useInstance } from "react-ioc";
import { observer } from "mobx-react";
 /* @ts-ignore */
import Loading from "@/components/Loading";

function Detail() {
    const chat = useInstance(ChatStore);
    return <>
        <DetailHeader />
        <div className="relative flex h-full max-w-full flex-1 flex-col overflow-hidden">
            <div className="bg-token-main-surface-primary sticky top-0 z-10 flex min-h-[40px] items-center justify-center bg-white pl-1 dark:bg-gray-800 dark:text-white md:hidden">
                <button type="button" data-testid="mobile-header-new-chat-button" aria-label="Open sidebar" className="m-1 inline-flex size-10 items-center justify-center rounded-full hover:bg-surface-hover"><span className="sr-only">Open sidebar</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-md">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3 8C3 7.44772 3.44772 7 4 7H20C20.5523 7 21 7.44772 21 8C21 8.55228 20.5523 9 20 9H4C3.44772 9 3 8.55228 3 8ZM3 16C3 15.4477 3.44772 15 4 15H14C14.5523 15 15 15.4477 15 16C15 16.5523 14.5523 17 14 17H4C3.44772 17 3 16.5523 3 16Z"
                            fill="currentColor"></path>
                    </svg>
                </button>
                <h1 className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-center text-sm font-normal">Friendly Greetings and Assistance</h1>
                <button type="button" aria-label="New chat" className="m-1 inline-flex size-10 items-center justify-center rounded-full hover:bg-surface-hover">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-md">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.7929 2.79289C18.0118 1.57394 19.9882 1.57394 21.2071 2.79289C22.4261 4.01184 22.4261 5.98815 21.2071 7.20711L12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16H9C8.44772 16 8 15.5523 8 15V12C8 11.7348 8.10536 11.4804 8.29289 11.2929L16.7929 2.79289ZM19.7929 4.20711C19.355 3.7692 18.645 3.7692 18.2071 4.2071L10 12.4142V14H11.5858L19.7929 5.79289C20.2308 5.35499 20.2308 4.64501 19.7929 4.20711ZM6 5C5.44772 5 5 5.44771 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14C19 13.4477 19.4477 13 20 13C20.5523 13 21 13.4477 21 14V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34314 4.34315 3 6 3H10C10.5523 3 11 3.44771 11 4C11 4.55228 10.5523 5 10 5H6Z"
                            fill="currentColor"></path>
                    </svg>
                </button>
            </div>
            <main className="flex h-full flex-col overflow-y-auto" role="main">
                <div className="flex h-full w-full flex-col">
                    <div className="flex flex-col h-full overflow-y-auto">
                        {chat.chatLoading && <Loading />}
                        {!chat.chatLoading && chat.activeConv?.messages?.map((message) => <Original key={message.id} data={message} />)}
                        {!chat.chatLoading && <ChatInput />}
                    </div>
                </div>
            </main>
        </div>
    </>
}
const ChatInput = () => {
    return <div className="w-full">
        <form className="mx-auto flex w-full flex-row gap-3 transition-[max-width] duration-300 sm:px-2 md:max-w-3xl xl:max-w-4xl sm:mb-10">
            <div className="relative flex h-full flex-1 items-stretch md:flex-col">
                <div className="flex w-full items-center">
                    <div className="relative flex w-full flex-grow flex-col overflow-hidden rounded-t-3xl border pb-4 text-text-primary transition-all duration-200 sm:rounded-3xl sm:pb-0 shadow-md border-border-light bg-surface-chat">
                        <div className="flex flex-row">
                            <textarea dir="ltr" name="text" id="prompt-textarea" tabIndex={0} data-testid="text-input" rows={1} className="md:py-3.5 m-0 w-full resize-none py-[13px] placeholder-black/50 bg-transparent dark:placeholder-white/50 [&amp;:has(textarea:focus)]:shadow-[0_2px_6px_rgba(0,0,0,.05)] max-h-[45vh] md:max-h-[55vh] px-5 focus:outline-none focus:ring-0 focus:ring-opacity-0 focus:ring-offset-0 transition-[max-height] duration-200 disabled:cursor-not-allowed"
                                style={{ "height": "52px", "overflowY": "auto" }} placeholder="Message GPT-4o"></textarea>
                        </div>
                        <div className="items-between flex gap-2 pb-2 flex-row">
                            <div className="mx-auto flex"></div>
                            <div className="mr-2">
                                <button aria-label="Send message" id="send-button" className="cursor-pointer rounded-full bg-text-primary p-1.5 text-text-primary outline-offset-4 transition-all duration-200 disabled:cursor-not-allowed disabled:text-text-secondary disabled:opacity-10"
                                    data-testid="send-button" type="submit" aria-describedby=":ra:"><span className="" data-state="closed"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white dark:text-black"><path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
}
export default observer(Detail);