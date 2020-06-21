<template>
  <div id="company">
    <div v-if="company">
      <h1>{{ company.name }}</h1>
      <img :src="company.logo" v-bind:alt="company.name" />
      <p>{{ company.description }}</p>
      <table>
        <tr>
          <th>Amount</th>
          <th>Year</th>
          <th>Descriptions</th>
        </tr>
        <tr
          v-for="violation in company.privacyViolation"
          :key="violation.amount"
        >
          <td>${{ formatMoney(violation.amount) }}</td>
          <td>{{ violation.year }}</td>
          <td>{{ violation.description || 'Description is not available at this time' }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import formatMoney from '../helpers/format-money.js';

export default {
  name: 'Company',
  computed: {
    company() {
      return this.$store.state.companies.filter(company => company.id === this.$route.params.id)[0];
    }
  },
  methods: {
    formatMoney
  }
};
</script>

<style lang="scss">
#company {
  padding: 2rem;
  width: 80%;

  img {
    display: block;
    max-width: 100%;
    height: 20rem;
    margin: 0 auto;
  }

  p {
    margin: 3rem 0;
  }

  table {
    max-width: 100%;
  }

  table, th, td {
    border: 1px solid black;
  }

  th, td {
    padding: 1rem;
  }
}
</style>
