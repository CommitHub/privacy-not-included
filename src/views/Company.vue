<template>
  <div id="company">
    <h1>{{ company.name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Company',
  data() {
    return {
      company: null
    };
  },
  created() {
    this.company = this.$store.state.companies.filter(company => company.id === this.$route.params.id)[0];
  }
};
</script>
