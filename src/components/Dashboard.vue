<template>
	<section id="dashboard">
		<h2>Dashboard</h2>
		<section class="general-info-container">
			<div 
				class="general-info-card"
				v-if="totalCompanies"
			>
				<p class="bigger-text">{{ totalCompanies }}</p>
				<p class="subtext">Total Companies</p>
			</div>
			<div 
				class="general-info-card"
				v-if="totalViolations"
			>
				<p class="bigger-text">{{ totalViolations }}</p>
				<p class="subtext">Total Amount of Privacy Violations</p>
			</div>
			<div 
				class="general-info-card"
				v-if="totalAmount"
			>
				<p class="bigger-text">${{ totalAmount }}</p>
				<p class="subtext">Total Amount Paid</p>
			</div>
		</section>
	</section>
</template>

<script>
import formatMoney from '../helpers/format-money.js';

export default {
	name: 'Dashboard',
	computed: {
		allPrivacyViolations() {
			const allPrivacyViolations = [];
			this.$store.state.companies.forEach(company => company.privacyViolation.forEach(violation => allPrivacyViolations.push(violation)));
			return allPrivacyViolations;
		},
		totalCompanies() {
			return this.$store.state.companies.length;
		},
		totalAmount() {
			return formatMoney(this.allPrivacyViolations.reduce((acc, violation) => acc + violation.amount, 0));
		},
		totalViolations() {
			return this.allPrivacyViolations.length;
		},
	},
  methods: {
    formatMoney
  }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";

#dashboard {
	padding: 2rem;
  background-color: $background-color-list;

	h2 {
		margin: 1rem 0;
	}

	.general-info-container {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 3rem 0;

		.general-info-card {
			border-radius: 1rem;
			flex: 1;
			padding: 2rem;
			margin: 1rem;
			background-color: white;
		}
	}
}
</style>