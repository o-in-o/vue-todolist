<template>
  <div class="input-block">
    <custom-input
      :value.sync="title"
      placeholder="Введите название задачи"
      @keyup.enter="addTask"
      class="input-task"
    >
      <custom-button color="transparent" @click="addTask">
        <book-plus fill-color="#182233" />
      </custom-button>
    </custom-input>
    <custom-input
      :value.sync="searchedItem"
      placeholder="Найти и просмотреть задачу"
      @keyup.enter="searchTask"
      class="input-task"
    >
      <custom-button color="transparent" @click="searchTask">
        <magnify fill-color="#182233" />
      </custom-button>
    </custom-input>
    <div class="center">
      <notification-cmpt v-if="searchError" type-msg="error">
        {{ searchError }}
      </notification-cmpt>
    </div>
    <p v-if="todosArray.length">
      Сортировать по: <span @click="sortingByDone">статусу</span> /
      <span @click="sortingByDate"> дате создания</span>
    </p>
    <div class="center">
      <notification-cmpt v-if="error" type-msg="error">
        {{ error }}
      </notification-cmpt>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { tasksStoreModule } from "@/store";
import { ITodoList } from "@/store/modules/TasksStoreModule";
import { v4 as uuidv4 } from "uuid";
import CustomInput from "../../UI/CustomInput.vue";
import CustomButton from "../../UI/CustomButton.vue";
import BookPlus from "vue-material-design-icons/BookPlus.vue";
import Magnify from "vue-material-design-icons/Magnify.vue";
import NotificationCmpt from "@/components/common/NotificationCmpt/NotificationCmpt.vue";

@Component({
  components: {
    CustomInput,
    CustomButton,
    BookPlus,
    Magnify,
    NotificationCmpt,
  },
})
export default class InputBlock extends Vue {
  currentTitle = "";
  searchValue = "";
  searchError = "";

  get title(): string {
    return this.currentTitle;
  }

  set title(val: string) {
    this.currentTitle = val;
  }

  get searchedItem(): string {
    return this.searchValue;
  }

  set searchedItem(val: string) {
    this.searchValue = val;
  }

  get todosArray(): ITodoList[] {
    return tasksStoreModule.todoListArray;
  }

  get error(): string {
    return tasksStoreModule.errors;
  }

  addTask(): void {
    tasksStoreModule.updateError("");
    this.searchError = "";

    if (this.title) {
      if (this.todosArray.some((item) => item.value === this.title)) {
        tasksStoreModule.updateError("Такая задача уже существует");
      } else {
        tasksStoreModule.updateTodoList({
          isDone: false,
          id: uuidv4(),
          value: this.title,
          isEdit: true,
          createdAt: new Date(),
        });
      }
    } else {
      tasksStoreModule.updateError("Нельзя добавить задачу без описания");
    }

    this.title = "";
  }

  //TODO: При масштабировании вынести в утилиты
  sortingByDone(): void {
    const newArray = this.todosArray.sort(
      (x, y) => Number(y.isDone) - Number(x.isDone)
    );

    tasksStoreModule.updateArray(newArray);
  }

  //TODO: При масштабировании вынести в утилиты
  sortingByDate(): void {
    const newArray = this.todosArray.sort(
      (x: ITodoList, y: ITodoList) =>
        y.createdAt.getTime() - x.createdAt.getTime()
    );

    tasksStoreModule.updateArray(newArray);
  }

  searchTask(): ITodoList | undefined {
    this.searchError = "";
    const searched = this.todosArray.find(
      (elem) => elem.value === this.searchValue
    );

    if (searched) {
      this.$router.push({
        name: "detail-info-page",
        params: { uuid: searched.id },
      });
    } else {
      this.searchError = "Ничего не найдено. Попробуйте найти что-то другое";
    }

    return searched;
  }
}
</script>

<style lang="scss" scoped>
.input-block {
  width: 100%;

  @media (max-width: 912px) {
    width: 468px;
  }

  @media (max-width: 552px) {
    width: 320px;
  }
}

.center {
  display: flex;
  justify-content: center;
}

.input-task {
  box-shadow: 0px 2px 4px rgba(41, 41, 41, 0.08);
  padding: 0 5px;
}

.error-msg {
  background: #f2d6d3;
  font-size: 12px;
  color: #862317;
  padding: 8px;
  border: 2px solid #c03221;
}

span {
  cursor: pointer;
  color: #1a2793;

  &:hover {
    text-decoration: underline;
  }
}
</style>
