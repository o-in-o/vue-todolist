<template>
  <div>
    <h1>Текущие задачи</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HeaderTaskView extends Vue {}
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  background-color: #0B273D;
  color: #fff;
  padding: 7px 0;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

h1 {
  margin: 0;
  padding: 0;
  font-size: 24px;
}
</style>
