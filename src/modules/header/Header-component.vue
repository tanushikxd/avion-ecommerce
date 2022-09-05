<template>
  <header class="header">
    <div class="container">
      <div class="header-wrapper">
        <div class="header-logo">
          <router-link to="/">
            <img src="../../assets/icons/Logo.svg" alt="" />
          </router-link>
          <router-link class="header-logo_basket" to="/basket">
            {{ getBasket }}
            <img src="../../assets/icons/Shopping--cart.svg" alt="" />
          </router-link>
        </div>
        <nav class="nav">
          <ul class="nav-menu">
            <li class="nav-menu_item">
              <router-link to="/products" class="nav-menu_item-link"
                >Products</router-link
              >
            </li>
            <li class="nav-menu_item">
              <router-link to="/about" class="nav-menu_item-link"
                >About</router-link
              >
            </li>
            <li class="nav-menu_item">
              <router-link to="/admin-products" class="nav-menu_item-link"
                >Admin
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    getBasket() {
      return this.$store.getters.getBasket.length;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/header.scss";
</style>
