<template>
  <section class="products">
    <div class="container products-container">
      <div class="products-items">
        <div
          class="products-item"
          v-for="(product, index) in products"
          :key="index"
        >
          <router-link :to="{ name: 'product', params: { id: product.id } }">
            <img :src="product.image" alt="" class="products-item_img" />
            <h4 class="products-item_title">{{ product.title }}</h4>
            <p class="products-item_price">$ {{ product.price }}</p>
            <button type="button" @click="deleteProducts(product.id)">
              Delete
            </button>
          </router-link>
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
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((json) => {
        this.products = json;
      });
  },
  methods: {
    deleteProducts(id) {
      fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      }).then((res) => console.log(res));
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/scss/products.scss";
</style>
