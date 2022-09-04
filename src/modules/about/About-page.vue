<template>
  <div class="about">
    <h1 class="about-title">
      A brand built on the love of craftmanship, quality and outstanding
      customer service
    </h1>
    <div class="about-first">
      <div class="about-first_wrapper">
        <h3 class="about-first_title">
          From a studio in London to a global brand with over 400 outlets
        </h3>
        <p class="about-first_text">
          When we started Avion, the idea was simple. Make high quality
          furniture affordable and available for the mass market. <br />
          <br />Handmade, and lovingly crafted furniture and homeware is what we
          live, breathe and design so our Chelsea boutique become the hotbed for
          the London interior design community.
        </p>
      </div>
      <img
        src="../../assets/images/about1.jpg"
        alt=""
        class="about-first_img"
      />
    </div>
    <div class="about-first">
      <img
        src="../../assets/images/about2.jpg"
        alt=""
        class="about-first_img"
      />
      <div class="about-first_wrapper">
        <h3 class="about-first_title">
          Our service isn’t just personal, it’s actually hyper personally
          exquisite
        </h3>
        <p class="about-first_text">
          When we started Avion, the idea was simple. Make high quality
          furniture affordable and available for the mass market. <br />
          <br />Handmade, and lovingly crafted furniture and homeware is what we
          live, breathe and design so our Chelsea boutique become the hotbed for
          the London interior design community.
        </p>
      </div>
    </div>
    <static-page></static-page>
    <static-2-page></static-2-page>
  </div>
</template>

<script>
import StaticPage from "../../modules/two-modules/Static-page.vue";
import Static2Page from "../../modules/two-modules/Static2-page.vue";

export default {
  components: {
    Static2Page,
    StaticPage,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/about.scss";
</style>
