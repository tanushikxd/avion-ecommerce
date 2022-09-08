<template>
  <footer class="footer">
    <!-- <div class="container"> -->
    <div class="footer-wrapper">
      <nav class="footer-nav">
        <ul class="footer-menu">
          Menu
          <li class="footer-item">
            <router-link to="/footer-menu" class="footer-link"
              >New arrivals</router-link
            >
          </li>
          <li class="footer-item">
            <router-link to="/footer-menu" class="footer-link"
              >Best sellers</router-link
            >
          </li>
          <li class="footer-item">
            <router-link to="/footer-menu" class="footer-link"
              >Recently viewed
            </router-link>
          </li>
          <li class="footer-item">
            <router-link to="/footer-menu" class="footer-link"
              >Popular this week</router-link
            >
          </li>
          <li class="footer-item">
            <router-link to="/products" class="footer-link"
              >All products
            </router-link>
          </li>
        </ul>
        <ul class="footer-menu">
          Categories
          <li class="footer-item">
            <router-link to="/footer-categories" class="footer-link"
              >Crockery</router-link
            >
          </li>
          <li class="footer-item">
            <router-link to="/footer-categories" class="footer-link"
              >Furniture</router-link
            >
          </li>
          <li class="footer-item">
            <router-link to="/footer-categories" class="footer-link"
              >Homeware
            </router-link>
          </li>
          <li class="footer-item">
            <router-link to="/footer-categories" class="footer-link"
              >Plant pots</router-link
            >
          </li>
          <li class="footer-item">
            <router-link to="/footer-categories" class="footer-link"
              >Chairs
            </router-link>
          </li>
          <li class="footer-item">
            <router-link to="/footer-categories" class="footer-link"
              >Crockery
            </router-link>
          </li>
        </ul>
        <ul class="footer-menu">
          Our company
          <li class="footer-item">
            <router-link to="/about" class="footer-link">About us</router-link>
          </li>
          <li class="footer-item">
            <router-link to="/our-company" class="footer-link"
              >Vacancies</router-link
            >
          </li>
          <li class="footer-item">
            <router-link to="/our-company" class="footer-link"
              >Contact us
            </router-link>
          </li>
          <li class="footer-item">
            <router-link to="/our-company" class="footer-link"
              >Privacy</router-link
            >
          </li>
          <li class="footer-item">
            <router-link to="/our-company" class="footer-link"
              >Returns policy
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="input">
        <div class="input-forms">
          <h4 class="input-title">Join our mailing list</h4>

          <input type="text" placeholder="your@email.com" class="input-form" />
          <button class="input-btn">Sign up</button>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/footer.scss";
</style>
