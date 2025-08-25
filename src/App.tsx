import { observer} from "mobx-react";
import { Component } from "react";
import { RouterProvider} from "react-router-dom";
import { router } from "./routes/routes";
import { provider } from "react-ioc";
import { ApiService } from "./core/api";
import { AuthStore } from "./stores/AuthStore";
import { NavigationService} from "./components/NavigationService";
import { ChatStore } from "./stores/ChatStore";
import { AppStore } from "./stores/AppStore";
import { SessionStore } from "./stores/Session";

// export const StoreContext = createContext<RootStore>({} as RootStore);
// export const StoreProvider = StoreContext.Provider;
// export const useStore = (): RootStore => useContext(StoreContext);
@observer
@provider(
  AppStore,
  ApiService,
  AuthStore, 
  ChatStore,
  SessionStore, 
  NavigationService)
export default class App extends Component {
  render() {
    return (
      <RouterProvider router={router} >
        </RouterProvider>
    );
  }
}
