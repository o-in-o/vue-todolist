<template>
  <div class="home-container">
    <div class="home">
      <h1>Небольшое ToDo приложение</h1>
      <h4>
        Если рассматривать приложение как самостоятельное, без учета
        масштабирования, то использование стора было бы нецелесообразно.
        Состояние можно хранить в компоненте
      </h4>
      <p class="sub-header">Задача состояла из требований:</p>
      <ol>
        <li>Таска состоит из одного поля – name</li>
        <li>Возможность добавлять, удалять, редактировать задачи</li>
        <li>Просмотр и сортировка задач</li>
        <li>
          Использовать сервер WT и БД для выборки и хранения задач
          <span>(Обговаривали, что таски будут храниться локально)</span>
        </li>
        <li>Дизайн на своё усмотрение</li>
      </ol>
      <p class="sub-header">Что использовалось:</p>
      <ul>
        <li>Vue + Декораторы</li>
        <li>Vuex + Декораторы</li>
        <li>VueRouter</li>
        <li>TypeScript</li>
        <li>Для стилей - scss</li>
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
.home-container {
  display: flex;
  justify-content: center;
  padding: 0 40px;
}

.home {
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
}
p {
  text-align: left;
}
</style>
