<template>
  <div id="list">
    <section v-for="company in companies" :key="company.id">
      <img :src="company.logo" v-bind:alt="company.name" />
      <h2>{{ company.name }}</h2>
      <p>{{ company.description }}</p>
      <p>Total Violations: {{ company.totalViolations }}</p>
      <p>Total Amount: {{ (company.totalAmount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }}</p>
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

</style>
