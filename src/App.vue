<template>
  <v-app id="app">
    <v-app-bar fixed color="primary" light>
      <v-toolbar-title>Privacy Not Included</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <router-link to="/">
          <v-icon class="nav-icon">fas fa-home</v-icon>
        </router-link>
      </v-btn>
    </v-app-bar>
    <router-view class="view" />
    <Footer />
  </v-app>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Footer
  },
  created() {
    this.$store.commit("getCompaniesData");
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Arvo&display=swap");
@import "./styles/variables.scss";
@import "./styles/general-styles.scss";

#app {
  font-family: "Arvo", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $font-color-dark;
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
    font-size: 0.86em;
  }

  h6 {
    font-size: 0.67em;
  }

  button {
    font-size: 1.3em;
    cursor: pointer;
  }

  .view {
    margin-top: 6rem;
  }

  .nav-icon {
    color: $font-color-dark;
  }
}
</style>
