<template>
  <div class="home">
    <h1>Небольшой прототип ToDo приложения</h1>
    <h4>
      Если рассматривать приложение как самостоятельное, без учета
      масштабирования, то использование стора было бы нецелесообразно. Состояние
      можно хранить в компоненте
    </h4>
    <p class="sub-header">Что использовалось:</p>
    <ul>
      <li>Vue + Декораторы</li>
      <li>Vuex + Декораторы</li>
      <li>VueRouter</li>
      <li>TypeScript</li>
      <li>Для стилей - scss</li>
    </ul>
    <p class="sub-header">Что можно добавить:</p>
    <ul>
      <li>express + mongodb для храния задач в БД</li>
      <li>добавить микросервисы для работы с api (сохранять / обновлять задачи)</li>
      <li>тесты</li>
    </ul>
    <p class="sub-header">Комментарии:</p>
    <ul>
      <li>Приложение писалось с расчётом на large-scale проект</li>
      <li>Состояние задачи хранится в сторе</li>
      <li>Добавлен поиск по созданным задачам</li>
      <li>
        Дополнительно установлен uuid для генерации id
        <span>необязательно</span>
      </li>
      <li>Подключены иконки <span>необязательно</span></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class HomeView extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  width: 768px;
  background-color: #fafafa;
  box-shadow: 0px 2px 4px rgba(41, 41, 41, 0.08);
  color: #232d42;
  font-weight: 500;
}

.sub-header {
  text-decoration: underline;
}

span {
  font-size: 10px;
}

ol,
ul {
  & li {
    text-align: left;
  }
}

h4 {
  margin: 20px;
  color: #d01f1f;
}

@media (max-width: 830px) {
  .home {
    width: auto;
  }
}
</style>
