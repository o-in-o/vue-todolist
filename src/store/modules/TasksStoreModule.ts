import { Module, Mutation, VuexModule } from "vuex-module-decorators";
import { tasksStoreModule } from "@/store";

export interface ITodoList {
  value: string;
  id: string;
  isDone: boolean;
  isEdit: boolean;
  createdAt: Date;
}

@Module({
  name: "tasksStoreModule",
  namespaced: true,
})
export class TasksStoreModule extends VuexModule {
  todoListArray: ITodoList[] = [];
  errors = "";

  @Mutation
  updateTodoList(data: ITodoList) {
    tasksStoreModule.todoListArray.push(data);
  }

  @Mutation
  updateArray(data: ITodoList[]) {
    this.todoListArray = data;
  }

  @Mutation
  removeItem(id: string) {
    this.todoListArray = this.todoListArray.filter((item) => item.id !== id);
  }

  @Mutation
  editTask(id: string) {
    const index = this.todoListArray.findIndex((element) => element.id === id);

    this.todoListArray[index].isEdit = !this.todoListArray[index].isEdit;
  }

  @Mutation
  updateTask(data: { id: string; newValue: string }) {
    const index = this.todoListArray.findIndex(
      (element) => element.id === data.id
    );

    this.todoListArray[index].value = data.newValue;
  }

  @Mutation
  updateTaskStatus(data: { id: string; checked: boolean }) {
    const index = this.todoListArray.findIndex(
      (element) => element.id === data.id
    );

    this.todoListArray[index].isDone = data.checked;
  }

  @Mutation
  updateError(error: string) {
    this.errors = error;
  }
}
