<template>
  <div class="task-group">
    <custom-input
      :value="done"
      class="checkbox"
      color="transparent"
      type="checkbox"
      @change="changeStatus($event.target.checked)"
    />
    <custom-input
      :class="{ 'input is-done': isDone, input: !isDone }"
      :readonly="isEdit"
      :value="value"
      color="transparent"
      @keyup.enter="editTask($event.target.value)"
    />
    <custom-button class="view" color="transparent" @click="showDetailInfo">
      <eye-icon />
    </custom-button>
    <custom-button
      v-if="!done"
      class="edit"
      color="transparent"
      @click="editTask($event.target.value)"
    >
      <edit-icon fill-color="#6C757D" />
    </custom-button>
    <custom-button class="delete" color="transparent" @click="removeItem">
      <delete-icon fill-color="#C03221" />
    </custom-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { tasksStoreModule } from "@/store";
import CustomButton from "@/components/UI/CustomButton.vue";
import CustomInput from "@/components/UI/CustomInput.vue";
import DeleteIcon from "vue-material-design-icons/Delete.vue";
import EditIcon from "vue-material-design-icons/Pencil.vue";
import EyeIcon from "vue-material-design-icons/Eye.vue";
import { ITodoList } from "@/store/modules/TasksStoreModule";

@Component({
  components: {
    CustomButton,
    CustomInput,
    DeleteIcon,
    EditIcon,
    EyeIcon,
  },
})
export default class TaskCmpt extends Vue {
  @Prop({ required: true }) readonly done!: boolean;
  @Prop({ required: true }) readonly value!: string;
  @Prop() readonly disabled!: boolean;
  @Prop({ required: true }) readonly id!: string;
  @Prop({ default: false, required: true }) readonly isEdit!: boolean;

  isDone = false;

  get todosArray(): ITodoList[] {
    return tasksStoreModule.todoListArray;
  }

  removeItem(): void {
    tasksStoreModule.removeItem(this.id);
  }

  editTask(val: string): void {
    tasksStoreModule.editTask(this.id);

    if (this.todosArray.some((item) => item.value === val)) {
      tasksStoreModule.updateError("Такая задача уже существует");
    } else {
      tasksStoreModule.updateError("");

      if (val === this.value || !val) {
        tasksStoreModule.updateTask({
          id: this.id,
          newValue: this.value,
        });
      } else {
        tasksStoreModule.updateTask({
          id: this.id,
          newValue: val,
        });
      }
    }
  }

  changeStatus(val: boolean): void {
    this.isDone = val;
    tasksStoreModule.updateTaskStatus({ checked: val, id: this.id });
  }

  showDetailInfo() {
    this.$router.push({ name: "detail-info-page", params: { uuid: this.id } });
  }
}
</script>

<style lang="scss" scoped>
.task-group {
  padding: 4px;
  margin-top: 10px;
  width: 768px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d8ddfa;
  color: #23348b;

  @media (max-width: 912px) {
    width: 468px;
  }
}

@media (max-width: 552px) {
  .task-group {
    width: 320px;
  }
  button {
    padding: 2px;
  }
}

.input {
  width: 100%;
}

.is-done {
  text-decoration: line-through;
}

.checkbox {
  width: 30px;
}

.view {
  transition: ease-in all 0.2s;

  &:hover {
    background: #7ec2ff;
  }
}

.edit {
  transition: ease-in all 0.2s;
  border: 2px solid transparent;

  &:hover {
    background: #d1ecdd;
    color: #fff;
  }

  &:focus {
    background: #d1ecdd;
    border: 2px solid #12703a;
  }
}

.delete {
  transition: ease-in all 0.2s;
  border: 2px solid transparent;

  &:hover {
    background: #f2d6d3;
  }
}
</style>
