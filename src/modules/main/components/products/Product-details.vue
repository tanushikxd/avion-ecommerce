<template>
  <section class="second">
    <div class="product">
      <img :src="products.image" alt="" class="product-image" />
      <div class="product-info">
        <h2 class="product-title">{{ products.title }}</h2>
        <p class="product-price">{{ products.price }} $</p>
        <p class="product-descr">Product description</p>
        <p class="product-description">{{ products.description }}</p>
        <p class="product-table">Dimensions</p>
        <table class="product-details">
          <tr>
            <th>Height</th>
            <th>Width</th>
            <th>Depth</th>
          </tr>

          <tr>
            <td>{{ products.height }}</td>
            <td>{{ products.width }}</td>
            <td>{{ products.depth }}</td>
          </tr>
        </table>
        <div class="product-quantity">
          <p class="product-quantity_title">Quantity</p>
          <input
            v-model="itemsCount"
            placeholder="0"
            class="product-quantity_input"
            type="number"
          />
        </div>
        <div class="product-info_btns">
          <button @click="addToCart(products)" class="product-btn">
            Add to cart
          </button>
          <router-link to="/basket">
            <button>Go to cart</button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="products-like">
      <h3 class="products-like_might">You might also like</h3>

      <products-page></products-page>
    </div>
    <static-page></static-page>
  </section>
</template>

<script>
import ProductsPage from "./Products-page.vue";
import StaticPage from "../../../two-modules/Static-page.vue";
export default {
  components: {
    ProductsPage,
    StaticPage,
  },
  data() {
    return {
      products: "",
      productsId: this.$route.params,
      data: [],
      itemsCount: "",
    };
  },
  computed: {
    getProducts() {
      return this.$store.getters.getProducts;
    },
    getBasket() {
      return this.$store.getters.getBasket;
    },
  },
  created() {
    fetch(`http://localhost:3000/products/${this.productsId.id}`)
      .then((res) => res.json())
      .then((json) => {
        this.products = json;
      });
  },

  methods: {
    addToCart(item) {
      this.getBasket.push(item);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/scss/products.scss";
</style>
