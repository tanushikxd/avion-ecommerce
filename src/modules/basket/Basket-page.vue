<template>
  <div class="basket">
    <div class="container">
      <div class="basket-items">
        <div
          class="basket-item"
          v-for="(item, index) in getBasket"
          :key="index"
        >
          <button class="btn-remove" @click="remove(index)">Remove</button>
          <div class="backet-item_img">
            <img :src="item.image" alt="" />

            <h4>{{ item.title }}</h4>
            <p>$ {{ item.price }}</p>
          </div>

          <div class="basket-item_qty">
            <p class="qty-title">Quantity</p>
            <div basket-item_btns>
              <button @click="increment(index)" class="qty-btn">+</button>
              {{ item.qty }}
              <button @click="decrement(index)" class="qty-btn btn-1">-</button>
            </div>
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
    increment(index) {
      this.getBasket[index].qty++;
    },
    decrement(index) {
      if (this.getBasket[index].qty > 1) {
        this.getBasket[index].qty--;
      }
    },
  },
};
</script>

<style></style>

<style lang="scss" scoped>
@import "../../assets/scss/basket.scss";
</style>
