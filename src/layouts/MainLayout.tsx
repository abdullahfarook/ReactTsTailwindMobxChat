import authStore from '@/stores/authStore';
import { memo } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';


const state = authStore
const MainLayout = () => {
   return <div className="flex h-full w-full flex-col">
        <h1>Main Layout Start</h1>

        <Outlet />
        <h1>Main Layout End</h1>
    </div>
    if (state.isAuthenticated){
        return <Outlet />;
    }

    const location = useLocation();
    var loginUrl = "/login";
    var redirectUrl = location.pathname;
    var url = `${loginUrl}?redirect=${redirectUrl}`;
    return <Navigate to={url} replace />;
}

export default MainLayout;