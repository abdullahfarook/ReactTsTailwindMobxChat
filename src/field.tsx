import * as React from "react";
import { inject, observer } from "mobx-react";
import { RootStore,store } from "./rootStore";

@observer
export class FieldInput extends React.Component{
  appStore = store.appStore;
  render() {
    return (
      <input
        value={this.appStore.currentItem}
        onChange={e => this.appStore.currentItem = e.currentTarget.value}
      />
    );
  }
}
