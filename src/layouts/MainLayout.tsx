import { Outlet } from 'react-router-dom';

const MainLayout = () => {
   return <div className="flex h-full w-full flex-col">
        <h1>Main Layout Start</h1>

        <Outlet />
        <h1>Main Layout End</h1>
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