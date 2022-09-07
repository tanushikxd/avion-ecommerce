<template>
  <div class="basket">
    <div class="container">
      <div class="basket-items">
        <div
          class="basket-item"
          v-for="(item, index) in getBasket"
          :key="index"
          :basket_item_data="item"
        >
          <button @click="remove(index)">Remove</button>
          <div class="backet-item_img">
            <img :src="item.image" alt="" />

            <h4>{{ item.title }}</h4>
            <p>$ {{ item.price }}</p>
          </div>

          <div class="basket-item_qty">
            <p>Quantity</p>
            <span>
              <!-- <span @click="decr">-</span> -->
              {{ item.qty }}
              <!-- <span @click="incr">+</span> -->
            </span>
          </div>
        </div>
        <div class="basket-total">
          <p>Total:</p>
          <p>$ {{ Total }}</p>
        </div>
        <!-- <button class="basket-checkout">Go to checkout</button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: "",
    };
  },
  props: {
    basket_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    getBasket() {
      return this.$store.getters.getBasket;
    },
    getProducts() {
      return this.$store.getters.getProducts;
    },
    Total() {
      if (this.getBasket.length) {
        let total = [];
        for (let item of this.getBasket) {
          total.push(item.price * item.qty);
        }
        total = total.reduce(function (sum, el) {
          return sum + el;
        });
        return total;
      } else {
        return 0;
      }
    },
  },
  created() {
    fetch(`http://localhost:3000/products/${this.productsId.id}`)
      .then((res) => res.json())
      .then((json) => {
        this.products = json;
      });
  },
  mounted() {
    this.$set(this.basket_item_data, "qty", 1);
  },
  methods: {
    add(item) {
      if (this.getBasket.length) {
        let isProductExist = false;
        this.getBasket.map(function (product) {
          if (product.article === item.article) {
            isProductExist = true;
            product.qty++;
          }
        });
        if (!isProductExist) {
          this.getBasket.push(item);
        }
      } else {
        this.getBasket.push(item);
      }

      //   this.getProducts;
    },
    remove(index) {
      this.getBasket.splice(index, 1);
    },
  },
};
</script>

<style></style>

<style lang="scss" scoped>
@import "../../assets/scss/basket.scss";
</style>
