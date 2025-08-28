import { Session } from '@/stores/Session';
import { observer } from 'mobx-react';
import { useInstance } from 'react-ioc';
import { Navigate, Outlet} from 'react-router-dom';

const MainLayout = () => {
    const session = useInstance(Session);

    if (session.isAuthenticated) {
        return (
            <div id="root"  >
                <div className="flex" style={{ "height": "calc(0px + 100dvh)" }}>
                    <div className="relative z-0 flex h-full w-full overflow-hidden">
                        <Outlet />
                    </div>
                </div>
            </div>)
    }
    return <Navigate to="/login" />
}

export default observer(MainLayout);