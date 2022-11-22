<template>
  <div id="notification-cmpt" :class="currentClass"><slot></slot></div>
</template>

<script lang="ts">
type typeMsg = "info" | "error" | "warning" | "success";

import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class NotificationCmpt extends Vue {
  @Prop({ default: "info" }) readonly typeMsg!: typeMsg;

  get currentClass(): string {
    return this.typeMsg;
  }
}
</script>

<style scoped>
#notification-cmpt {
  width: 440px;
  padding: 12px 24px;
  margin: 10px;
  border-radius: 7px;
  font-weight: 400;
}

.info {
  border: 1px solid #116acc;
  color: #116acc;
  background-color: #dde7f2;
}

.error {
  border: 1px solid #ba0000;
  color: #ba0000;
  background-color: #eedcde;
}
</style>
