import React, { useEffect } from "react";
import { NavigateFunction, Outlet, useNavigate } from "react-router-dom";
import { useInstance } from "react-ioc";

export class NavigationService{
    nav!: NavigateFunction;
    setNavigator(nav: NavigateFunction) {
        this.nav = nav;
    }
    navigate(to: string, options?: any) {
        this.nav(to, options);
    }
    goBack() {
        this.nav(-1);
    }
}


export const NavigatorProvider: React.FC = () => {
  const navigate = useNavigate();
  const navService = useInstance(NavigationService);
  useEffect(() => {
    navService.setNavigator(navigate);
  }, [navigate, navService]);

  return <Outlet />;
};
