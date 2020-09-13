<template>
  <v-app id="app">
    <v-app-bar color="primary" light>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link class="nav-title" to="/">
          Privacy Not Included
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/">
        <v-btn icon>
          <div class="flex-column">
            <v-icon class="nav-icon">fas fa-home</v-icon>
            <p class="nav-icon-title">Home</p>
          </div>
        </v-btn>
      </router-link>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <router-link to="/mission">
            <v-list-item>
              <v-list-item-title>
                <span class="nav-link">Mission</span>
              </v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <router-view />
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
  data: () => ({
    drawer: false,
    group: null
  }),
  watch: {
    group() {
      this.drawer = false;
    }
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
  background-color: $main-background-color-light;

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

  a {
    color: $font-color-dark;
    margin: 0;
  }

  .nav-icon {
    color: $font-color-dark;
  }

  .nav-icon-title {
    font-size: 0.5em;
  }

  .v-toolbar__title {
    color: $font-color-dark;
  }

  .nav-title {
    text-decoration: none;
  }

  .nav-link {
    font-size: 1.4em;
  }
}
</style>
