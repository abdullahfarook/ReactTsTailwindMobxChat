import { FieldState } from "formstate";
import { observable, action, makeAutoObservable } from "mobx";

class ApplicationState {
  items: string[] = [];

  // currentItem = new FieldState("");
  currentItem = new FieldState("")
  constructor() {
    makeAutoObservable(this);
  }

  addCurrentItem(arg: string) {
    // this.items.push(this.currentItem.value);
    // this.currentItem.onChange("");

    this.items.push(this.currentItem.value);
    this.currentItem.onChange("");
  }

  reset() {
    this.items = [];
    this.currentItem.onChange("");
    // this.currentItem.onChange("");

  }
}

export const appState = new ApplicationState();
