<template>
  <div class="container">
    <h2>Страница, на которую вы пытаетесь перейти не существует</h2>
    <p>
      Вернитесь не предыдущую страницу или перейдите на
      <router-link to="/">
        <span>главную</span>
      </router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class ErrorPage extends Vue {}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  & h2 {
    font-size: 34px;
  }

  & a {
    text-decoration: none;
  }

  & span {
    color: #2a3bb7;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      color: #10197a;
      text-decoration: underline;
    }
  }
}
</style>
