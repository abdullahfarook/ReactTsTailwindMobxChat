import React, { useEffect } from "react";
import { NavigateFunction, Outlet, Params, useMatches, useNavigate, useParams } from "react-router-dom";
import { useInstance } from "react-ioc";

export class NavigationService
{
    _nav!: NavigateFunction;
    _params: Params<string> = {}
    setNavigator(nav: NavigateFunction) {
        this._nav = nav;
    }
    setParams(params: any) {
      this._params = params;
    }
    navigate(to: string, options?: any) {
        this._nav(to, options);
    }
    goBack() {
        this._nav(-1);
    }
}


export const NavigatorProvider: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const navService = useInstance(NavigationService);
  navService.setParams(params);

  useEffect(() => {
    navService.setNavigator(navigate);
  }, [navigate, navService]);

  return <Outlet />;
};
