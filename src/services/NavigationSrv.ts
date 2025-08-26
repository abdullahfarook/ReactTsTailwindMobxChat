import { Location, NavigateFunction, Params } from "react-router-dom";

export class NavigationSrv {

  private nav!: NavigateFunction;
  private params: Params<string> = {}
  private location!: Location<any>;
  setNavigator(nav: NavigateFunction) {
    this.nav = nav;
  }
  setParams(params: any) {
    this.params = params;
  }
  setLocation(location: Location<any>) {
    this.location = location;
  }
  navigate(to: string, options?: any) {
    this.nav(to, options);
  }
  goBack(i = -1) {
    this.nav(i);
  }
}



