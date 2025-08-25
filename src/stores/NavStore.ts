import { Location, NavigateFunction, Params } from "react-router-dom";

export class NavStore {

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



