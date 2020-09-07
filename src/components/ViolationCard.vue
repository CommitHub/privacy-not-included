<template>
  <div class="violation-card">
    <div class="d-flex flex-row justify-space-between">
      <p>Amount: {{ formatMoney(violation.amount) }}</p>
      <p>Year: {{ violation.year }}</p>
    </div>
    <p>Description:</p>
    <p>{{ violation.description }}</p>
    <a :href="violation.source" rel="noopener" target="_blank">Source</a>
  </div>
</template>

<script>
import formatMoney from "../helpers/format-money.js";

export default {
  name: "ViolationCard",
  props: ["violation"],
  methods: {
    formatMoney
  }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";

.violation-card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 2rem 0;
  padding: 1rem;
}
</style>
