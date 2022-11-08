<template>
  <div class="container">
    <header-task-view/>
    <input-block/>
    <tasks-block/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import HeaderTaskView from "@/components/common/Header/header.vue";
import TasksBlock from "@/components/common/TasksBlock/TasksBlock.vue";
import InputBlock from "@/components/common/InputBlock/InputBlock.vue";

@Component({
  components: {
    HeaderTaskView,
    TasksBlock,
    InputBlock,
  },
})
export default class TaskView extends Vue {
}
</script>

<style scoped>
.container {
  background-color: #f9f8f8;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 25px;
}
</style>
