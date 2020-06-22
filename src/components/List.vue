<template>
  <div id="list">
    <section
      class="card"
      v-for="company in companies"
      :key="company.id"
    >
      <img :src="company.logo" v-bind:alt="company.name" />
      <h2>{{ company.name }}</h2>
      <section class="content">
        <p>Total Privacy Violations: {{ company.totalViolations }}</p>
        <p>Total Amount: ${{ formatMoney(company.totalAmount) }}</p>
      </section>
      <router-link :to="{ name: 'company', params: { id: company.id }}">Details</router-link>
    </section>
  </div>
</template>

<script>
import formatMoney from '../helpers/format-money.js';

export default {
  name: 'List',
  data() {
    return {
      companies: this.$store.state.companies
    };
  },
  methods: {
    formatMoney
  }
};

</script>

<style lang="scss">
@import "../styles/variables.scss";

#list {
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: $background-color-list;
  padding: 2rem;

  .card {
    margin: 1rem 0;
    padding-top: 1rem;
    border-radius: 2rem;
    background-color: white;
    width: 30%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    @media (max-width: $desktop-sm) {
      width: 40%;
    }

    @media (max-width: $tablet-lg) {
      width: 100%;
    }

    img {
      height: 15rem;
      max-width: 90%;
      margin: 1rem 0;
    }

    .content {
      margin: 1rem 0;
      padding: 1rem;
      border-top: 0.2rem solid $main-color;
    }

    .content > * {
      margin: 1rem 0;
    }

    a {
      color: white;
      background-color: $normal;
      border-radius: 0 0 2rem 2rem;
      width: 100%;
      padding: 1.5rem 0;
      text-align: center;
    }
  }
}
</style>
