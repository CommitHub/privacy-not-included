<template>
  <div id="page-not-found">
    <img src="@/assets/images/404.gif" alt="ufo taking notebook" />
    <div class="info-container">
      <h1>404</h1>
      <h2 class="subtext">Oops! The page you are looking for doesn't exist</h2>
      <router-link to="/">Go Home</router-link>
    </div>
  </div>
</template>

<style lang="scss">
@import "../styles/variables.scss";

#page-not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;

  img {
    width: 30%;

    @media (max-width: $laptop-lg) {
      width: 60%;
    }

    @media (max-width: $tablet-lg) {
      width: 90%;
    }
  }

  .info-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1rem;
    margin: 4rem 0;

    .subtext {
      margin: 2rem 0;
    }
  }
}
</style>
