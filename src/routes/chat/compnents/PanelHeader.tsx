import { NavStore } from "@/stores/NavStore";
import { AppStore } from "@/stores/AppStore";
import { NewChatIcon, Sidebar } from "@/components/svgs";
import { useInstance } from "react-ioc"

export default function PanelHeader() {
    const appStore = useInstance(AppStore);
    const nav = useInstance(NavStore);
    return <div className="flex items-center justify-between py-[2px] md:py-2">
        <button onClick={()=> appStore.toggleSidebar()} className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary border border-border-light hover:text-accent-foreground size-10 cursor-pointer rounded-full border-none bg-transparent p-2 hover:bg-surface-hover md:rounded-xl"
            data-testid="close-sidebar-button" aria-label="Close sidebar" aria-describedby=":r0:">
           <Sidebar />
           
        </button>
        <div className="flex gap-0.5">
            <button onClick={()=> nav.navigate('/chat/new')} className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary border border-border-light hover:text-accent-foreground size-10 cursor-pointer rounded-full border-none bg-transparent p-2 hover:bg-surface-hover md:rounded-xl"
                data-testid="nav-new-chat-button" aria-label="New chat" aria-describedby=":r1:">
                <NewChatIcon />
            </button>
        </div>
    </div>
}

