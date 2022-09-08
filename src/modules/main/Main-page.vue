<template>
  <main>
    <section class="hero">
      <div class="container hero-container">
        <div class="hero-wrapper">
          <router-link to="/products">
            <h2 class="hero-title">
              Luxury homeware for people who love timeless design quality
            </h2>
            <p class="hero-text">Shop the new Spring 2022 collection today</p>

            <button @click="goToProducts()" class="hero-btn">
              View collection
            </button>
          </router-link>
        </div>
      </div>
    </section>
    <static-page></static-page>
    <products-page></products-page>

    <section class="explains">
      <div class="container explains-container">
        <div class="explains-info">
          <h2 class="explains-title">It started with a small idea</h2>
          <p class="explains-text">
            A global brand with local beginnings, our story begain in a small
            studio in South London in early 2014
          </p>
          <button class="explains-btn">View collection</button>
        </div>
        <div class="explains-info_pic"></div>
      </div>
    </section>
    <static-2-page></static-2-page>
  </main>
</template>

<script>
import StaticPage from "../two-modules/Static-page.vue";
import ProductsPage from "./components/products/Products-page.vue";
import Static2Page from "../two-modules/Static2-page.vue";
export default {
  data() {
    return {
      products: "",
    };
  },
  created() {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((json) => {
        this.products = json;
      });
  },
  components: {
    ProductsPage,
    StaticPage,
    Static2Page,
  },
  methods: {
    goToProducts() {
      fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .then((json) => {
          this.products = json;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/main.scss";
</style>
