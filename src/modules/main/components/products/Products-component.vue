<template>
  <section class="products">
    <div class="container products-container">
      <div class="products-items">
        <div
          class="products-item"
          v-for="(product, index) in products"
          :key="index"
        >
          <img :src="product.image" alt="" class="products-item_img" />
          <h4 class="products-item_title">{{ product.title }}</h4>
          <p class="products-item_price">$ {{ product.price }}</p>
        </div>
      </div>
      <button class="products-btn">View collection</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: "",
    };
  },
  created() {
    fetch("products.json")
      .then((res) => res.json())
      .then((json) => {
        this.products = json;
      });
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/scss/products.scss";
</style>
