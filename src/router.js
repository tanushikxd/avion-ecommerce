import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Main from "../src/modules/main/Main-page.vue";
import About from "./modules/about/About-page.vue";
import Products from "../src/modules/main/components/products/Products-component.vue";
import Details from "./modules/main/components/products/Product-details.vue";
import Admin from "./modules/admin/Admin-page.vue";
import FooterMenu from "./modules/footer/Menu-page.vue";
import FooterCategories from "./modules/footer/Categories-page.vue";
import OurCompany from "./modules/footer/Our-page.vue";
import Basket from "./modules/basket/Basket-page.vue";

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
    {
      path: "/product/:id",
      name: "product",
      component: Details,
    },
    {
      path: "/admin-products",
      name: "admin-products",
      component: Admin,
    },
    {
      path: "/footer-menu",
      name: "footer-menu",
      component: FooterMenu,
    },
    {
      path: "/footer-categories",
      name: "footer-categories",
      component: FooterCategories,
    },
    {
      path: "/our-company",
      name: "our-company",
      component: OurCompany,
    },
    {
      path: "/basket",
      name: "basket",
      component: Basket,
    },
  ],
});
