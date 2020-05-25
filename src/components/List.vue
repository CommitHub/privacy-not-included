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
        <p>Total Amount: ${{ (company.totalAmount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }}</p>
      </section>
      <button>Details</button>
    </section>
  </div>
</template>

<script>
import db from "../firebase/firebaseInit.js";

export default {
  name: 'List',
  data() {
    return {
      companies: []
    };
  },
  created() {
    db.collection("companies")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            description: doc.data().description,
            logo: doc.data().logo,
            name: doc.data().name,
            privacyViolation: doc.data().privacy_violation,
            totalAmount: doc.data().privacy_violation.reduce((acc, violation) => {
              return acc + violation.amount
            }, 0),
            totalViolations: doc.data().privacy_violation.length
          };
          this.companies.push(data);
        });
      });
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
    margin: 1rem;
    padding: 1rem 0 0 0;
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
    }

    .content {
      margin: 1rem 0;
      padding: 1rem;
      border-top: 0.2rem solid $main-color;
    }

    .content > * {
      margin: 1rem 0;
    }

    button {
      background-color: $normal;
      border-radius: 0 0 2rem 2rem;
      width: 100%;
      padding: 1rem;
      color: white;
    }
  }
}
</style>
