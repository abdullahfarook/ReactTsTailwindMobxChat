import { FieldState } from "formstate";
import { observable, action, makeAutoObservable } from "mobx";

export class AppStore {
  currentItem = new FieldState("");
  isSidebarOpen = true;
  constructor() {
    makeAutoObservable(this);
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  
}