<template>
  <div id="app">
    <header-component></header-component>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from "./modules/header/Header-component.vue";

export default {
  components: {
    HeaderComponent,
  },
};
</script>

<style ProductDetails lang="scss">
@import "./assets/scss/global.scss";
</style>
