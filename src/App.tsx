import { FieldInput } from "@/field";
import { RootStore, store } from "@/stores/rootStore";
import { observer, Provider } from "mobx-react";
import React, { createContext, useContext } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

export const StoreContext = createContext<RootStore>({} as RootStore);
export const StoreProvider = StoreContext.Provider;
export const useStore = (): RootStore => useContext(StoreContext);

@observer
export default class App extends React.Component {
  render() {
    return (
      <Provider myStore={store}>
       <RouterProvider router={router} />
      </Provider>
    );
  }
}
