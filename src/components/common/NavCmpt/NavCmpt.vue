<template>
  <div class="links">
    <router-link v-for="(item, index) in linkArray" :key="index" :to="item.to"
      >{{ item.title }}
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

type linkArray = {
  to: string;
  title: string;
  isActive: boolean;
};

@Component
export default class NavCmpt extends Vue {
  linkArray: linkArray[] = [
    { to: "/", title: "Главная", isActive: true },
    { to: "/tasks", title: "Задачи", isActive: false },
    { to: "/kanban", title: "Доска", isActive: false },
  ];
}
</script>

<style scoped lang="scss">
.links{
  display: flex;
  flex-direction: column;
  width: 100%;
  //height: 100vh;

  & a {
    font-weight: 400;
    color: #8a92a6;
    width: auto;
    margin-bottom: 7px;
    padding: 5px 10px;
    border-radius: 4px;
    text-decoration: none;

    &.router-link-exact-active {
      color: #fff;
      background-color: #3a57e8;
    }
  }
}
</style>
