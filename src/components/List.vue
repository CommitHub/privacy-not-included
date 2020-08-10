<template>
  <div id="list" v-if="companies.length">
    <h2>Companies</h2>
    <ExportCSV :exportData="formattedCompanies" />
    <div class="search-container">
      <label for="search-bar" class="hidden">Search Company:</label>
      <input
        type="text"
        v-model="search"
        placeholder="Search Company"
        name="search-bar"
      />
      <button class="btn-main" v-on:click="clearSearch()">Cancel</button>
    </div>
    <div class="list-container">
      <section class="card" v-for="company in resultQuery" :key="company.id">
        <img :src="company.logo" v-bind:alt="company.name" />
        <h2>{{ company.name }}</h2>
        <span></span>
        <section class="content">
          <p>Total Privacy Violations: {{ company.totalViolations }}</p>
          <p>Total Amount: {{ formatMoney(company.totalAmount) }}</p>
        </section>
        <router-link :to="{ name: 'company', params: { id: company.id } }"
          >Details</router-link
        >
      </section>
    </div>
  </div>
</template>

<script>
import ExportCSV from "@/components/ExportCSV.vue";
import formatMoney from "../helpers/format-money.js";

export default {
  name: "List",
  components: {
    ExportCSV
  },
  data() {
    return {
      search: ""
    };
  },
  computed: {
    companies() {
      return this.$store.state.companies;
    },
    formattedCompanies() {
      return this.formatJson(this.$store.state.companies);
    },
    resultQuery() {
      if (this.search) {
        return this.$store.state.companies.filter(company => {
          return company.name.toLowerCase().includes(this.search.toLowerCase());
        });
      } else {
        return this.$store.state.companies;
      }
    }
  },
  methods: {
    formatMoney,
    formatJson: function(companies) {
      if (!companies && !companies.length) return null;

      const formattedData = [];
      companies.forEach(company => {
        company.privacyViolation.forEach(violation => {
          formattedData.push({
            name: company.name,
            amount: this.formatMoney(violation.amount),
            year: violation.year,
            source: violation.source,
            description: violation.description
          });
        });
      });

      return formattedData;
    },
    clearSearch: function() {
      this.search = "";
    }
  }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";

#list {
  padding: 2rem;
  margin-top: 1rem;

  h2 {
    margin: 4rem 0;
  }

  .search-container {
    display: flex;
    margin: 2rem 0;
    align-items: center;

    input {
      flex: 1;
      margin: 0 1rem 0 0;
      padding: 1rem 2rem;
      border-radius: 1rem;
      border: none;
      background-color: $main-grey;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      font-size: 1.3rem;
    }
  }

  .list-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .card {
    margin: 1rem 0;
    padding-top: 1rem;
    border-radius: 2rem;
    background-color: white;
    width: 30%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    @media (max-width: $desktop-sm) {
      width: 40%;
    }

    @media (max-width: $tablet-lg) {
      width: 100%;
    }

    img {
      height: 10rem;
      max-width: 90%;
      margin: 1rem 0;
    }

    h2 {
      padding: 0 2rem;
    }

    span {
      width: 80%;
      border-top: 0.2rem solid $main-color;
    }

    .content {
      padding: 1rem;
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
