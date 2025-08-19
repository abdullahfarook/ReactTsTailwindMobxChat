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
        <div className="flex flex-col items-center ">
          <form
            onSubmit={e => {
              e.preventDefault();
              store.appStore.addCurrentItem();
            }}
          >
            <div className="flex flex-row items-center gap-2">
              <FieldInput field={store.appStore.currentItem} />
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
              <button type="button" className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={() => store.appStore.reset()}>Reset</button>
            </div>
          </form>
          <ul className="flex flex-col gap-3">
            {store.appStore.items.map((item, i) => (
              <li
                key={item + i}
                className="px-4 py-2 rounded-2xl bg-white shadow-sm border border-gray-200 
                          hover:shadow-md hover:bg-gray-50 transition-all duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Provider>
    );
  }
}

export default App
