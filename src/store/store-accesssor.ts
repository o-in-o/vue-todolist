import { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import { TasksStoreModule } from "@/store/modules/TasksStoreModule";

export let tasksStoreModule: TasksStoreModule;

export function initializeStores(store: Store<any>): void {
  tasksStoreModule = getModule(TasksStoreModule, store);
}

export const modules = {
  tasksStoreModule: TasksStoreModule,
};
