import {AppStore} from "@/stores/AppStore";
import {NewChatIcon, Sidebar} from "@/components/svgs";
import {observer} from "mobx-react";
import {useInstance} from "react-ioc";

function DetailHeader() {
    const appStore = useInstance(AppStore);
    if (appStore.isSidebarOpen) return null;
    return <div className="sticky top-0 z-10 flex h-14 items-center justify-between bg-white p-2 font-semibold text-text-primary dark:bg-gray-800">
        <div className="hide-scrollbar flex w-full items-center justify-between gap-2 overflow-x-auto">
            <div className="mx-1 flex items-center gap-2">
                <div className="flex items-center gap-2 transition-all duration-200 ease-in-out translate-x-0 opacity-100">
                    <button onClick={() => appStore.toggleSidebar()}
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary hover:text-accent-foreground size-10 cursor-pointer rounded-xl border border-border-light bg-surface-secondary p-2 hover:bg-surface-hover max-md:hidden"
                            data-testid="open-sidebar-button"
                            aria-label="Open sidebar"
                            aria-describedby=":rr:">
                        <Sidebar/>
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary hover:text-accent-foreground size-10 cursor-pointer rounded-xl border border-border-light bg-surface-secondary p-2 hover:bg-surface-hover max-md:hidden"
                            data-testid="wide-header-new-chat-button"
                            aria-label="New chat"
                            aria-describedby=":rs:">
                        <NewChatIcon/>
                    </button>
                </div>
            </div>
        </div>
    </div>
}

export default observer(DetailHeader);