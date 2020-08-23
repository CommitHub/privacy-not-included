<template>
  <nav>
    <router-link to="/">
      <font-awesome-icon :icon="['fas', 'home']" title="Home" />
    </router-link>
  </nav>
</template>

<style lang="scss">
@import "../styles/variables.scss";

nav {
  background-color: $main-grey;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem !important;
  display: flex;
  justify-content: space-around;
  border-bottom: 0.2rem solid darken($main-grey, 20%) !important;

  a {
    color: $font-color-dark;
    margin: 0 1rem;
    font-size: 2em;
  }
}
</style>
