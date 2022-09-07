import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    products: "",
    basket: [],
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_BASKET: (state, basket) => {
      state.basket = basket;
    },
  },
  actions: {
    getProducts({ commit }, payload) {
      fetch(`http://localhost:3000/products?limit=/${payload}`)
        .then((res) => res.json())
        .then((json) => {
          commit("SET_PRODUCTS", json);
        });
    },
  },
  getters: {
    getProducts: (state) => state.products,
    getBasket: (state) => state.basket,
  },
});

export default store;
