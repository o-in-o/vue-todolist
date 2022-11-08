<template>
  <div id="app">
    <header>
      <p class="logo">TODO</p>
      <div :class="{ 'nav-menu': !isOpen, 'nav-menu is-open': isOpen }">
        <custom-button class="header-menu" @click="changeStatus">
          <component :is="statusMenu" />
        </custom-button>
        <nav-cmpt v-if="isOpen" />
        <div class="bg"></div>
      </div>
    </header>
    <section @click="closeMenu">
      <aside>
        <nav-cmpt />
      </aside>
      <main>
        <router-view />
      </main>
    </section>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import NavCmpt from "./components/common/NavCmpt/NavCmpt.vue";
import CustomButton from "./components/UI/CustomButton.vue";
import MenuIcon from "vue-material-design-icons/Menu.vue";
import CloseIcon from "vue-material-design-icons/Close.vue";

@Component({
  components: {
    NavCmpt,
    CustomButton,
    MenuIcon,
    CloseIcon,
  },
})
export default class App {
  isOpen = false;

  get statusMenu(): string {
    return this.isOpen ? "CloseIcon" : "MenuIcon";
  }

  changeStatus(): void {
    this.isOpen = !this.isOpen;
  }

  closeMenu(): void {
    if (this.isOpen) {
      this.isOpen = false;
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Open Sans, Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  width: 100%;

  & input {
    font-family: Open Sans, Roboto, Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
  }
}

aside {
  padding: 20px;
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
}

main {
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: #f9f8f8;
}

header {
  width: 100%;
  height: 50px;
  border-bottom: 2px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

section {
  display: flex;
}

.logo {
  color: #232d42;
  font-weight: 700;
  font-size: 24px;
  height: 30px;
  margin: 0 20px;
}

.header-menu {
  display: none;
}

@media (max-width: 667px) {
  header {
    justify-content: space-between;
  }

  aside {
    display: none;
  }

  .header-menu {
    display: block;
  }

  .nav-menu {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
  }

  .is-open {
    position: absolute;
    content: "";
    top: 9px;
    left: 0;
    width: 100%;
    background-color: #fff;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row-reverse;
  }
}
</style>
