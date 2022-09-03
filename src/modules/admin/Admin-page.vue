<template>
  <div class="admin">
    <div class="container">
      <form class="form">
        <label for="image">Image</label>
        <input type="text" id="image" v-model="products.image" />
        <label for="title">Title</label>
        <input type="text" id="title" v-model="products.title" />
        <label for="price">Price</label>
        <input type="number" id="price" v-model="products.price" />
        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="13"
          v-model="products.description"
        ></textarea>
        <label for="height">Height</label>
        <input type="text" id="height" v-model="products.height" />
        <label for="width">Width</label>
        <input type="text" id="width" v-model="products.width" />
        <label for="depth">Depth</label>
        <input type="text" id="depth" v-model="products.depth" />
        <button type="button" @click="addProducts()" class="admin-btn">
          Add item
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: {
        image: "",
        title: "",
        price: "",
        description: "",
        height: "",
        width: "",
        depth: "",
      },
    };
  },
  methods: {
    addProducts() {
      fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(this.products),
      }).then((res) => console.log(res));
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/admin.scss";
</style>
