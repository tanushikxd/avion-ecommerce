<template>
  <div id="app">
    <header-component></header-component>
    <!-- <router-view></router-view> -->
    <transition name="moveInUp">
      <router-view />
    </transition>
    <footer-page></footer-page>
  </div>
</template>

<script>
import HeaderComponent from "./modules/header/Header-component.vue";
import FooterPage from "./modules/footer/Footer-page.vue";

export default {
  components: {
    HeaderComponent,
    FooterPage,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/global.scss";
</style>
