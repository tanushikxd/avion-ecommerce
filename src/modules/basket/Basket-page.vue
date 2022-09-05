<template>
  <!-- <div class="basket">
    <div class="container">
      <div class="basket-items">
        <div
          class="basket-item"
          v-for="(item, index) in getBasket"
          :key="index"
        >
          <img :src="item.image" alt="" />
          <h2>{{ item.title }}</h2>
          <p>$ {{ item.price }}</p>
        </div>
      </div>
    </div>
  </div> -->
  <div class="basket">
    <div class="container basket-container">
      <label class="basket-image">Product</label>
      <label class="basket-details">Quantity</label>
      <label class="basket-price">Total</label>
    </div>

    <div class="basket-items">
      <div class="basket-item" v-for="(item, index) in getBasket" :key="index">
        <img :src="item.image" alt="" />
        <h2>{{ item.title }}</h2>
        <p>$ {{ item.price }}</p>
      </div>
    </div>

    <div class="totals">
      <div class="totals-item totals-item-total">
        <label>Grand Total</label>
        <div class="totals-value" id="cart-total">90.57</div>
      </div>
    </div>

    <button class="checkout">Checkout</button>
  </div>
</template>

<script>
export default {
  computed: {
    getBasket() {
      return this.$store.getters.getBasket;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/basket.scss";
</style>
