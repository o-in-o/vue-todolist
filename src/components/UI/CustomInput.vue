<template>
  <div class="custom-input">
    <input
      v-model="model"
      :class="currentClass"
      :disabled="readonly"
      :placeholder="placeholder"
      :type="type"
      v-bind="$attrs"
      v-on="$listeners"
    />
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

type colorInput = "primary" | "transparent";

@Component
export default class CustomInput extends Vue {
  @Prop() value!: any;
  @Prop({ default: "text" }) readonly type!: "text" | "checkbox";
  @Prop() readonly placeholder!: string;
  @Prop() readonly color?: colorInput;
  @Prop({ default: false }) readonly readonly!: boolean;

  emittedValue: unknown = this.value;

  get model(): unknown {
    return this.value;
  }

  set model(val: unknown) {
    this.emittedValue = val;
    this.$emit("update:value", this.emittedValue);
  }

  get currentClass(): string | null {
    return this.color ? this.color : null;
  }
}
</script>

<style lang="scss" scoped>
input {
  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 8px;
  outline: none;
  transition: ease-in all 0.2s;
  cursor: pointer;
  font-weight: 600;
  margin-right: 15px;
  width: 100%;

  &:focus {
    outline: none;
    border: 2px solid #546fff;
  }
}

.custom-input {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  height: 50px;
  border: 2px solid transparent;
}

.transparent {
  &:hover {
    border: 2px solid transparent;
  }

  &:focus {
    border: 2px solid transparent;
  }
}
</style>
