import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Main from "../src/modules/main/Main-page.vue";
import About from "./modules/about/About-page.vue";
import Products from "../src/modules/main/components/products/Products-component.vue";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "main",
      component: Main,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/products",
      name: "products",
      component: Products,
    },
  ],
});
