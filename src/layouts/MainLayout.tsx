import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return <div id="root"  >
        <div className="flex" style={{ "height": "calc(0px + 100dvh)" }}>
            <div className="relative z-0 flex h-full w-full overflow-hidden">
                <Outlet />
            </div>
        </div>
    </div>
    //    const state = useInstance(RootStore).authStore;

    //     if (state.isAuthenticated){
    //         return <Outlet />;
    //     }

    //     const location = useLocation();
    //     var loginUrl = "/login";
    //     var redirectUrl = location.pathname;
    //     var url = `${loginUrl}?redirect=${redirectUrl}`;
    //     return <Navigate to={url} replace />;
}

export default MainLayout;