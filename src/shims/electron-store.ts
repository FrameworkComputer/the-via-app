export let Store: any;
if ((globalThis as any).require) {
  Store = (globalThis as any).require('electron-store');
} else {
  Store = class Store {
    store: any;
    constructor(props: any) {
      const store = localStorage.getItem('electronStore');
      this.store = store ? JSON.parse(store) : props.defaults;
    }
    get(key: string) {
      return this.store[key];
    }
    set(key: string) {
      this.store[key] = arguments[1];
      localStorage.setItem('electronStore', JSON.stringify(this.store));
    }
  };
}
