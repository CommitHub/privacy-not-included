<template>
  <div id="app">
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: 'App',
  components: {
    Footer
  },
  created() {
    this.$store.commit('getCompaniesData');
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Arvo&display=swap");
@import "./styles/variables.scss";
@import "./styles/general-styles.scss";
@import "./styles/reset.scss";

#app {
  font-family: 'Arvo', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $main-font-color;
  font-size: 1.3em;
  word-spacing: 1px;

  @media (max-width: $desktop-sm) {
    font-size: 1em;
  }

  p {
    line-height: 1.6;
  }

  h1 {
  font-size: 2em;
  }

  h2 {
    font-size: 1.5em;
  }

  h3 {
    font-size: 1.4em;
  }

  h4 {
    font-size: 1em;
  }

  h5 {
    font-size: .86em;
  }

  h6 {
    font-size: .67em;
  }

  button {
    font-size: 1.3em;
    cursor: pointer;
  }
}
</style>
