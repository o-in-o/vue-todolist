<template>
  <div class="container">
    <header-task-view />
    <input-block />
    <tasks-block />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import InputBlock from "@/components/common/InputBlock/InputBlock.vue";
import HeaderTaskView from "@/components/common/Header/header.vue";
import TasksBlock from "@/components/common/TasksBlock/TasksBlock.vue";

@Component({
  components: {
    TasksBlock,
    InputBlock,
    HeaderTaskView,
  },
})
export default class TaskView extends Vue {}
</script>

<style scoped>
.container {
  background-color: #f9f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
}
</style>
