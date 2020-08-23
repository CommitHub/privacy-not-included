<template>
  <div id="home">
    <section class="jumbotron">
      <div class="description-container">
        <h2>Security should be the focus of every company</h2>
        <p>
          Companies have been selling our data for a while with no concern to
          our privacy. The intention of this site is to bring that information
          in a digestible form to the people.
        </p>
      </div>
      <img src="@/assets/images/team-work.png" />
    </section>
    <Dashboard />
    <List />
  </div>
</template>

<script>
import Dashboard from "@/components/Dashboard.vue";
import List from "@/components/List.vue";

export default {
  name: "home",
  components: {
    Dashboard,
    List
  }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";

#home {
  .jumbotron {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    .description-container {
      width: 50%;

      @media (max-width: $tablet-lg) {
        width: 80%;
      }

      h2 {
        color: $accent;
        margin: 1rem 0;
      }
    }

    img {
      width: 40%;

      @media (max-width: $tablet-lg) {
        width: 80%;
      }
    }
  }
}
</style>
