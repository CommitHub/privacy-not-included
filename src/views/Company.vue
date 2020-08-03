<template>
  <div id="company">
    <div v-if="company">
      <router-link class="nav" to="/">Home</router-link>
      <h1>{{ company.name }}</h1>
      <img :src="company.logo" v-bind:alt="company.name" />
      <p>{{ company.description }}</p>
      <div class="table-container">
        <table>
          <tr>
            <th>Amount</th>
            <th>Year</th>
            <th>Descriptions</th>
            <th>Source</th>
          </tr>
          <tr
            v-for="violation in company.privacyViolation"
            :key="violation.amount"
          >
            <td>
              {{
                formatMoney(violation.amount) ||
                  "Amount is not available at this time"
              }}
            </td>
            <td>
              {{ violation.year || "Year is not available at this time" }}
            </td>
            <td>
              {{
                violation.description ||
                  "Description is not available at this time"
              }}
            </td>
            <td>
              <a
                v-if="violation.source"
                v-bind:href="violation.source"
                target="_blank"
                rel="noopener"
              >
                {{ violation.source }}
              </a>
              <p v-if="!violation.source">
                Source is not available at this time
              </p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import formatMoney from "../helpers/format-money.js";

export default {
  name: "Company",
  computed: {
    company() {
      return this.$store.state.companies.filter(
        company => company.id === this.$route.params.id
      )[0];
    }
  },
  methods: {
    formatMoney
  }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";

#company {
  padding: 2rem;
  width: 80%;
  margin: 0 auto;

  .nav {
    display: block;
    margin-bottom: 2rem;
    color: black;
  }

  h1 {
    margin-bottom: 2rem;
  }

  img {
    display: block;
    max-width: 100%;
    height: 20rem;
    margin: 0 auto;
  }

  p {
    margin: 3rem 0;
  }

  .table-container {
    overflow-x: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    table {
      max-width: 100%;
    }

    th,
    td {
      padding: 1rem;
    }

    tr {
      border-bottom: 0.2rem solid darken($background-color-list, 5%);
    }

    tr:nth-child(even) {
      background-color: $background-color-list;
    }
  }
}
</style>
