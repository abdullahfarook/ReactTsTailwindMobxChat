import { FieldInput } from "@/field";
import { observer, Provider } from "mobx-react";
import React, { createContext, useContext } from "react";
import { RouterProvider, useNavigate } from "react-router-dom";
import { router } from "./routes/routes";
import { provider } from "react-ioc";
import { ApiService } from "./core/api";
import { AuthStore } from "./stores/authStore";
import { ChatStore } from "./stores/chatStore";
import { NavigationService,NavigatorProvider } from "./core/navigator";

// export const StoreContext = createContext<RootStore>({} as RootStore);
// export const StoreProvider = StoreContext.Provider;
// export const useStore = (): RootStore => useContext(StoreContext);
@observer
@provider(ApiService,AuthStore, ChatStore, NavigationService)
export default class App extends React.Component {
  render() {
    return (
      <RouterProvider router={router} >
          <NavigatorProvider />
        </RouterProvider>
    );
  }
}
