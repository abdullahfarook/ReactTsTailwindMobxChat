import SidePanel from '@/routes/chat/SidePanel';
import { Outlet } from 'react-router-dom';

const ChatLayout = () => {
    return <>
    <SidePanel />
    <Outlet />
    </>
}

export default ChatLayout;