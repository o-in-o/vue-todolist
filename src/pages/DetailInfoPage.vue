<template>
  <div class="container">
    <h3>Информация по задаче "{{ currentTask.value }}"</h3>
    <p>
      Задача создана: <span>{{ currentTask.createdAt }}</span>
    </p>
    <p>
      Статус задачи:
      <span
        :class="{ normal: currentTask.isDone, warning: !currentTask.isDone }"
      >
        {{ currentTask.isDone ? "Выполнена" : "Не выполнена" }}</span
      >
    </p>
    <router-link to="/tasks">
      <custom-button> Вернуться к задачам</custom-button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ITodoList } from "@/store/modules/TasksStoreModule";
import { tasksStoreModule } from "@/store";
import CustomButton from "@/components/UI/CustomButton.vue";

@Component({
  components: { CustomButton },
})
export default class DetailInfoPage extends Vue {
  get currentTask(): ITodoList {
    const task = [...tasksStoreModule.todoListArray].find(
      (task) => task.id === this.$route.params.uuid
    );

    return task
      ? task
      : {
          id: "",
          isDone: false,
          createdAt: new Date(),
          value: "",
          isEdit: false,
        };
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: flex-start;
  background-color: #f9f8f8;
  padding: 10px;
}

.normal {
  background: #d1ecdd;
  color: #1aa053;
  padding: 5px 12px;
}

.warning {
  background: #f2d6d3;
  color: #c03221;
  padding: 5px 12px;
}
</style>
