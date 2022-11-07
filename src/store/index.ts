import Vue from "vue";
import Vuex, { Store } from "vuex";
import { initializeStores, modules } from "./store-accesssor";

Vue.use(Vuex);

const initializer = (store: Store<any>) => initializeStores(store);
export const plugins = [initializer];
export * from "./store-accesssor";

const store = new Store({
  plugins,
  modules,
  state: { root: "Root state" },
  strict: false,
});

export default store;
