import { FieldInput } from "@/field";
import { RootStore, store } from "@/rootStore";
import { observer, Provider } from "mobx-react";
import React, { createContext, useContext } from "react";

export const StoreContext = createContext<RootStore>({} as RootStore);
export const StoreProvider = StoreContext.Provider;
export const useStore = (): RootStore => useContext(StoreContext);
@observer
class App extends React.Component {
  render() {
    return (
      <Provider myStore={store}>
        <div className="App">
          <form
            onSubmit={e => {
              e.preventDefault();
              store.appStore.addCurrentItem(e.currentTarget.nodeValue ?? "");
            }}
          >
            <FieldInput  />
            <button type="submit">Submit</button>
            <button type="button" onClick={() => store.appStore.reset()}>
              Reset
            </button>
          </form>
          <ul>
            {store.appStore.items.map((item, i) => (
              <li key={item + i}>{item}</li>
            ))}
          </ul>
        </div>
      </Provider>
    );
  }
}

export default App
