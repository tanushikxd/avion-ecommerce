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
    <section class="offers">
      <div class="container">
        <h3 class="offers-title">What makes our brand different</h3>
        <div class="offers-wrapper">
          <div class="offers-choice">
            <img
              src="../../assets/icons/1(track).svg"
              alt=""
              class="offers-choice_icon"
            />
            <h4 class="offers-choice_title">Next day as standard</h4>
            <p class="offers-choice_text">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
          <div class="offers-choice">
            <img
              src="../../assets/icons/2(choice).svg"
              alt=""
              class="offers-choice_icon"
            />
            <h4 class="offers-choice_title">Made by true artisans</h4>
            <p class="offers-choice_text">
              Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>
          <div class="offers-choice">
            <img
              src="../../assets/icons/3(card).svg"
              alt=""
              class="offers-choice_icon"
            />
            <h4 class="offers-choice_title">Unbeatable prices</h4>
            <p class="offers-choice_text">
              For our materials and quality you won’t find better prices
              anywhere
            </p>
          </div>
          <div class="offers-choice">
            <img
              src="../../assets/icons/4(plant).svg"
              alt=""
              class="offers-choice_icon"
            />
            <h4 class="offers-choice_title">Recycled packaging</h4>
            <p class="offers-choice_text">
              We use 100% recycled to ensure our footprint is more manageable
            </p>
          </div>
        </div>
      </div>
    </section>
    <products-component></products-component>
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
        <div class="explains-info_pic">
          <img
            src="../../assets/images/explains.jpg"
            alt=""
            class="explains-info_img"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ProductsComponent from "./components/products/Products-component.vue";
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
    ProductsComponent,
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
