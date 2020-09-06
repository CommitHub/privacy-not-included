<template>
  <div id="company">
    <div v-if="company">
      <h1>{{ company.name }}</h1>
      <img :src="company.logo" :alt="company.name" />
      <p class="description">{{ company.description }}</p>
      <ViolationCard
        v-for="(violation, index) in company.privacyViolation"
        :key="index"
        :violation="violation"
      />
    </div>
  </div>
</template>

<script>
import ViolationCard from "@/components/ViolationCard.vue";

export default {
  name: "Company",
  components: {
    ViolationCard
  },
  computed: {
    company() {
      return this.$store.state.companies.filter(
        company => company.id === this.$route.params.id
      )[0];
    }
  }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";

#company {
  padding: 2rem;
  width: 80%;
  margin: 0 auto;

  h1 {
    margin-bottom: 2rem;
  }

  img {
    display: block;
    max-width: 100%;
    height: 20rem;
    margin: 0 auto;
  }

  .description {
    margin: 3rem 0;
  }
}
</style>
