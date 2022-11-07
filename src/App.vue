<template>
  <div id="app">
    <nav>
      <router-link to="/">Главная</router-link> |
      <router-link to="/tasks">Задачи</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Open Sans, Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & input {
    font-family: Open Sans, Roboto, Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
  }
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #5b5b5b;

    &.router-link-exact-active {
      color: #2a3bb7;
    }
  }
}
</style>
