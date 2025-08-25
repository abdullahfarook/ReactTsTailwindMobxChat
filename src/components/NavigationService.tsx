import React, { useEffect } from "react";
import { Location, NavigateFunction, Outlet, Params, useLocation, useNavigate, useParams } from "react-router-dom";
import { useInstance } from "react-ioc";
import { AuthStore } from "@/stores/AuthStore";
import Spinner from "./Spinner";
import { observer } from "mobx-react";

export class NavigationService {

  _nav!: NavigateFunction;
  _params: Params<string> = {}
  _location!: Location<any>;
  setNavigator(nav: NavigateFunction) {
    this._nav = nav;
  }
  setParams(params: any) {
    this._params = params;
  }
  setLocation(location: Location<any>) {
    this._location = location;
  }
  navigate(to: string, options?: any) {
    this._nav(to, options);
  }
  goBack(i = -1) {
    this._nav(i);
  }
}


function NavigatorProvider() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const navService = useInstance(NavigationService);
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
      {/* <span className="animate-pulse text-text-primary ml-1">Loading...</span> */}
    </div>
  }


  return <Outlet />;
}

export default observer(NavigatorProvider)