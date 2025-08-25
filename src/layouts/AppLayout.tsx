import { NavStore } from "@/stores/NavStore";
import Spinner from "@/components/Spinner";
import { AuthStore } from "@/stores/AuthStore";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { useInstance } from "react-ioc";
import { useLocation, useNavigate, useParams, Outlet } from "react-router-dom";

function AppLayout() {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    const navService = useInstance(NavStore);
    const auth = useInstance(AuthStore)

    useEffect(() => {
        auth.init();
    }, [])

    useEffect(() => {
        navService.setNavigator(navigate);
        navService.setParams(params);
        navService.setLocation(location);
    }, [location]);


    if (auth.isAuthenticating) {
        return <div className="flex flex-1 h-screen items-center justify-center" aria-live="polite" role="status">
            <Spinner className="text-text-primary" />
        </div>
    }


    return <Outlet />;
}
export default observer(AppLayout);