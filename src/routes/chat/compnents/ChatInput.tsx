import exp from "constants"

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
export default ChatInput