import { FieldInput } from "@/field";
import { RootStore, store } from "@/rootStore";
import { observer, Provider } from "mobx-react";
import React, { createContext, useContext } from "react";
import Chat from "./chat";
import Auth from "./auth";
import Test from "./test";

export const StoreContext = createContext<RootStore>({} as RootStore);
export const StoreProvider = StoreContext.Provider;
export const useStore = (): RootStore => useContext(StoreContext);

@observer
class App extends React.Component {
  render() {
    return (
      <Provider myStore={store}>
       <Chat />
      </Provider>
    );
  }
}

export default App
