import { FieldState } from "formstate";
import { observable, makeAutoObservable, computed } from "mobx";

// Create RootStore, that will contain references to other stores
export class RootStore {
  userStore: UserStore;
  todosStore: TodoStore;
  appStore: ApplicationStore;

  constructor() {
    // Bcause of passing this to sub stores, all stores can access RootStore and other stores
    this.userStore = new UserStore(this);    
    this.todosStore = new TodoStore(this);
    this.appStore = new ApplicationStore(this);
  }
}

class UserStore {
    rootStore: RootStore;
    userId: string = '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d';

    // RootStore is passed in constructor
    constructor(rootStore: RootStore) {
      makeAutoObservable(this, { rootStore: false });
      // Assign it to local variable so can access to it
      this.rootStore = rootStore;
    }

    
    get todos(): Todo[] {
        // Access todoStore through the root store.
        // In code below there is no author value in Todos, this was just created for show purpose
        return this.rootStore.todosStore.todos.filter(todo => todo.userId === this.userId)
    }
}

class TodoStore {
    rootStore: RootStore;

    // To define shape and mutations in you can create additional TodoStore
    @observable.shallow todos: Todo[] = [];

    constructor(rootStore: RootStore) {
      makeAutoObservable(this, { rootStore: false });
      this.rootStore = rootStore;
    }

}
class ApplicationStore {
  items: string[] = [];

  currentItem = new FieldState("");
  rootStore: RootStore;
  userId: string = '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d';

    // RootStore is passed in constructor
    constructor(rootStore: RootStore) {
      makeAutoObservable(this, { rootStore: false });
      // Assign it to local variable so can access to it
      this.rootStore = rootStore;
    }

  addCurrentItem() {
    this.items.push(this.currentItem.value);
    this.currentItem.onChange("");
  }

  reset() {
    this.items = [];
    this.currentItem.onChange("");
  }
}
class Todo{
    id!: string;
    userId!: string;
    title!: string ;
    description: string | undefined;
    author: string | undefined;
}

// inititate and export store so you can use it in the app
export const store = new RootStore();