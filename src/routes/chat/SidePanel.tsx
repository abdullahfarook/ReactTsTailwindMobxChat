import { useInstance } from "react-ioc";
import PanelHeader from "./compnents/PanelHeader"
import { AppStore } from "@/stores/AppStore";
import { observer } from "mobx-react";
import { ChatStore } from "@/stores/ChatStore";
import { useEffect } from "react";
// import NavItem from "./compnents/NavItem";
import cn from "@/core/utils";
import NavItem from "./compnents/NavItem";

function SidePanel() {
    const appStore = useInstance(AppStore);
    const chatStore = useInstance(ChatStore);

    const navStyle: React.CSSProperties = {
        width: appStore.isSidebarOpen ? "260px" : "0px",
        transform: appStore.isSidebarOpen ? "translateX(0px)" : "translateX(-100%)",
    };

    useEffect(() => {
        chatStore.loadConversations();
    }, []);

    return <div data-testid="nav" className="nav active max-w-[320px] flex-shrink-0 transform overflow-x-hidden bg-surface-primary-alt transition-all duration-200 ease-in-out md:max-w-[260px]" style={navStyle}>
        <div className="h-full w-[320px] md:w-[260px]">
            <div className="flex h-full flex-col">
                <div className={cn(
                    'flex h-full flex-col transition-opacity duration-200 ease-in-out opacity-100',
                    appStore.isSidebarOpen ? 'opacity-100' : 'opacity-0',
                )}>
                    <div className="flex h-full flex-col">
                        <nav id="chat-history-nav" aria-label="Chat History" className="flex h-full flex-col px-2 pb-3.5 md:px-3">
                            <div className="flex flex-1 flex-col">
                                <PanelHeader />
                                <div className="relative flex h-full flex-col pb-2 text-sm text-text-primary">
                                    <div className="flex-1" style={{ "position": "relative" }}>
                                        <div style={{ "overflow": "visible", "height": "0px", "width": "0px" }}>
                                            <div aria-label="Conversations" aria-readonly="true" className="ReactVirtualized__Grid ReactVirtualized__List outline-none" role="list" tabIndex={1} style={{
                                                "boxSizing": "border-box", "direction":
                                                    "ltr", "height": "828px", "position": "relative", "width": "236px", "willChange": "transform", "overflow": "hidden", "outline": "none"
                                            }}>
                                                <div className="ReactVirtualized__Grid__innerScrollContainer" role="row" style={{
                                                    "width": "auto", "height": "208px", "maxWidth": "236px", "maxHeight": "208px",  "position":
                                                        "relative"
                                                }}>
                                                    {chatStore.conversationsLoading && loading()}
                                                    {!chatStore.conversationsLoading && chatStore.conversationsByDate.map(([key, conversation]) =>
                                                        <div key={key} style={{"left": "0px",  "top": "0px", "width": "100%" }}>
                                                            <div className="mt-2 pl-2 pt-1 text-text-secondary" style={{ "fontSize": "0.7rem" }}>{key}</div>    
                                                            {conversation.map((message) => <NavItem key={message.id} id={message.id} title={message.content} active={chatStore.activeConversationId === message.id} onClick={() => chatStore.loadChat(message.id)} />)}
                                                        </div>
                                                        
                                                    )}


                                                </div>
                                            </div>
                                        </div>
                                        <div className="resize-triggers">
                                            <div className="expand-trigger">
                                                <div style={{ "width": "237px", "height": "829px" }}></div>
                                            </div>
                                            <div className="contract-trigger"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="none" aria-label="Account Settings" data-testid="nav-user" className="mt-text-sm flex h-auto w-full items-center gap-2 rounded-xl p-2 text-sm transition-all duration-200 ease-in-out hover:bg-surface-hover"
                                aria-controls=":rp:" type="button">
                                <div className="-ml-0.9 -mt-0.8 h-8 w-8 flex-shrink-0">
                                    <div className="relative flex"><img className="rounded-full" src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cmetadata%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%20xmlns%3Axsi%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema-instance%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Adcterms%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%22%3E%3Crdf%3ARDF%3E%3Crdf%3ADescription%3E%3Cdc%3Atitle%3EInitials%3C%2Fdc%3Atitle%3E%3Cdc%3Acreator%3EDiceBear%3C%2Fdc%3Acreator%3E%3Cdc%3Asource%20xsi%3Atype%3D%22dcterms%3AURI%22%3Ehttps%3A%2F%2Fgithub.com%2Fdicebear%2Fdicebear%3C%2Fdc%3Asource%3E%3Cdcterms%3Alicense%20xsi%3Atype%3D%22dcterms%3AURI%22%3Ehttps%3A%2F%2Fcreativecommons.org%2Fpublicdomain%2Fzero%2F1.0%2F%3C%2Fdcterms%3Alicense%3E%3Cdc%3Arights%3E%E2%80%9EInitials%E2%80%9D%20(https%3A%2F%2Fgithub.com%2Fdicebear%2Fdicebear)%20by%20%E2%80%9EDiceBear%E2%80%9D%2C%20licensed%20under%20%E2%80%9ECC0%201.0%E2%80%9D%20(https%3A%2F%2Fcreativecommons.org%2Fpublicdomain%2Fzero%2F1.0%2F)%3C%2Fdc%3Arights%3E%3C%2Frdf%3ADescription%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cmask%20id%3D%22viewboxMask%22%3E%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%220%22%20ry%3D%220%22%20x%3D%220%22%20y%3D%220%22%20fill%3D%22%23fff%22%20%2F%3E%3C%2Fmask%3E%3Cg%20mask%3D%22url(%23viewboxMask)%22%3E%3Crect%20fill%3D%22%23f4511e%22%20width%3D%22100%22%20height%3D%22100%22%20x%3D%220%22%20y%3D%220%22%20%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-family%3D%22Verdana%22%20font-size%3D%2236%22%20font-weight%3D%22400%22%20fill%3D%22%23ffffff%22%20text-anchor%3D%22middle%22%20dy%3D%2212.816%22%3EAB%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                        alt="Abdullah's avatar" /></div>
                                </div>
                                <div className="mt-2 grow overflow-hidden text-ellipsis whitespace-nowrap text-left text-text-primary" style={{ "marginTop": "0px", "marginLeft": "0px" }}>Abdullah</div>
                            </button>
                            <div style={{ "position": "absolute", "top": "0px", "left": "0px", "width": "max-content" }}>
                                <div id=":rp:" data-dialog="" role="listbox" tabIndex={0} data-placing="true" className="popover-ui w-[235px]" style={{
                                    "position": "relative", "transformOrigin": "center bottom", "marginRight": "0px",
                                    "translate": "0px", "display": "none"
                                }} aria-activedescendant=":rs:">
                                    <div className="text-token-text-secondary ml-3 mr-2 py-2 text-sm" role="note">sunny.rvd101@gmail.com</div>
                                    <div role="separator" aria-orientation="horizontal" className="-mx-1 my-1 h-px bg-border-medium"></div>
                                    <div id=":rs:" aria-selected="true" className="select-item text-sm" tabIndex={-1} role="option" data-autofocus="true" data-active-item="true">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text icon-md"
                                            aria-hidden="true">
                                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                            <path d="M10 9H8"></path>
                                            <path d="M16 13H8"></path>
                                            <path d="M16 17H8"></path>
                                        </svg>My Files</div>
                                    <div id=":rv:" aria-selected="true" className="select-item text-sm" tabIndex={-1} role="option">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-md">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M15 5C14.4477 5 14 4.55228 14 4C14 3.44772 14.4477 3 15 3H20C20.5523 3 21 3.44772 21 4V9C21 9.55228 20.5523 10 20 10C19.4477 10 19 9.55228 19 9V6.41421L13.7071 11.7071C13.3166 12.0976 12.6834 12.0976 12.2929 11.7071C11.9024 11.3166 11.9024 10.6834 12.2929 10.2929L17.5858 5H15ZM4 7C4 5.34315 5.34315 4 7 4H10C10.5523 4 11 4.44772 11 5C11 5.55228 10.5523 6 10 6H7C6.44772 6 6 6.44772 6 7V17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17V14C18 13.4477 18.4477 13 19 13C19.5523 13 20 13.4477 20 14V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7Z"
                                                fill="currentColor"></path>
                                        </svg>Help &amp; FAQ</div>
                                    <div id=":r12:" aria-selected="true" className="select-item text-sm" tabIndex={-1} role="option">
                                        <svg className="icon-md" width="17" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.6439 3C10.9352 3 10.2794 3.37508 9.92002 3.98596L9.49644 4.70605C8.96184 5.61487 7.98938 6.17632 6.93501 6.18489L6.09967 6.19168C5.39096 6.19744 4.73823 6.57783 4.38386 7.19161L4.02776 7.80841C3.67339 8.42219 3.67032 9.17767 4.01969 9.7943L4.43151 10.5212C4.95127 11.4386 4.95127 12.5615 4.43151 13.4788L4.01969 14.2057C3.67032 14.8224 3.67339 15.5778 4.02776 16.1916L4.38386 16.8084C4.73823 17.4222 5.39096 17.8026 6.09966 17.8083L6.93502 17.8151C7.98939 17.8237 8.96185 18.3851 9.49645 19.294L9.92002 20.014C10.2794 20.6249 10.9352 21 11.6439 21H12.3561C13.0648 21 13.7206 20.6249 14.08 20.014L14.5035 19.294C15.0381 18.3851 16.0106 17.8237 17.065 17.8151L17.9004 17.8083C18.6091 17.8026 19.2618 17.4222 19.6162 16.8084L19.9723 16.1916C20.3267 15.5778 20.3298 14.8224 19.9804 14.2057L19.5686 13.4788C19.0488 12.5615 19.0488 11.4386 19.5686 10.5212L19.9804 9.7943C20.3298 9.17767 20.3267 8.42219 19.9723 7.80841L19.6162 7.19161C19.2618 6.57783 18.6091 6.19744 17.9004 6.19168L17.065 6.18489C16.0106 6.17632 15.0382 5.61487 14.5036 4.70605L14.08 3.98596C13.7206 3.37508 13.0648 3 12.3561 3H11.6439Z"
                                                stroke="currentColor" strokeWidth="2" strokeLinejoin="round"></path>
                                            <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="2"></circle>
                                        </svg>Settings</div>
                                    <div role="separator" aria-orientation="horizontal" className="-mx-1 my-1 h-px bg-border-medium"></div>
                                    <div id=":r15:" aria-selected="true" className="select-item text-sm" tabIndex={-1} role="option">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out icon-md"
                                            aria-hidden="true">
                                            <path d="m16 17 5-5-5-5"></path>
                                            <path d="M21 12H9"></path>
                                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                        </svg>Log out</div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
const loading = () => {
    return <div>Loading...</div>
}
export default observer(SidePanel);