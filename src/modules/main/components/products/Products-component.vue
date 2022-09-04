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
            <button
              class="products-item_btn"
              type="button"
              @click="deleteProducts(product.id)"
            >
              X
            </button>
            <img :src="product.image" alt="" class="products-item_img" />
            <h4 class="products-item_title">{{ product.title }}</h4>
            <p class="products-item_price">$ {{ product.price }}</p>
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
      // limitValue: 4,
    };
  },
  created() {
    fetch(`http://localhost:3000/products?limit=/${this.limitValue}`)
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
  // viewCollection() {
  //   this.limit += 4;
  //   fetch(`http://localhost:3000/products?limit=/${this.limitValue}`)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       this.products = json;
  //     });
  // },
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/scss/products.scss";
</style>
