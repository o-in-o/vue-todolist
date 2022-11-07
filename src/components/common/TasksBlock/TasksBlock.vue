<template>
  <div class="tasks-block">
    <p v-if="!tasks.length">Список задач пуст</p>
    <task-cmpt
      v-for="(item, index) in tasks"
      :id="item.id"
      :key="index"
      :done="item.isDone"
      :is-edit="item.isEdit"
      :value="item.value"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CustomButton from "@/components/UI/CustomButton.vue";
import TaskCmpt from "@/components/common/TaskCmpt/TaskCmpt.vue";
import { tasksStoreModule } from "@/store";
import { ITodoList } from "@/store/modules/TasksStoreModule";

@Component({
  components: { CustomButton, TaskCmpt },
})
export default class TasksBlock extends Vue {
  get tasks(): ITodoList[] {
    return tasksStoreModule.todoListArray;
  }
}
</script>

<style scoped lang="scss">
p {
  border: 1px solid #12703A;
  background-color: #d1ecdd;
  padding: 5px 10px;
}
</style>
