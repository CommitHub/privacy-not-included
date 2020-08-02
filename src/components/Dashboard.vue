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
				<p class="bigger-text">{{ totalAmount }}</p>
				<p class="subtext">Total Amount Paid</p>
			</div>
		</section>
		<div class="charts-container">
			<section class="chart-container">
				<h3>Top 10 Privacy Violators</h3>
				<div class="chart">
					<bar v-if="datacollection" :chart-data="datacollection" :chart-options="options"></bar>
				</div>
				<div class="insight">
					<div class="insight-header">
						<font-awesome-icon 
							class="lightbulb"
							:icon="['far', 'lightbulb']" 
						/>
						<h4>Insight</h4>
					</div>
					<p class="subtext">The data is calculated on the total amount of violation fines.</p>
				</div>
			</section>
		</div>
	</section>
</template>

<script>
import formatMoney from '../helpers/format-money.js';
import Bar from '@/components/BarChart.js'

export default {
	name: 'Dashboard',
	components: {
    Bar
	},
	data() {
		return {
			companies: this.$store.state.companies,
			datacollection: null,
			options: null
		}
	},
  watch: {
		companies: function(fresh) {
      this.fillData(fresh)
		}
  },
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
    formatMoney,
    fillData: function(companies) {
      this.datacollection = this.formatDataForChart(companies);
    },
    formatDataForChart: function(companies) {
     const dataSet = [];
     companies.forEach(company => {
        let privacyViolationsAmount = 0;
        company.privacyViolation.forEach(violation => {
					privacyViolationsAmount += violation.amount;
        });

        dataSet.push({
          label: company.name,
          totalAmount: privacyViolationsAmount
        })
      });

			dataSet.sort(function(a,b){return b.totalAmount - a.totalAmount})
      const top10 = dataSet.slice(0, 9);
			return {
				labels: top10.map(company => company.label),
				datasets: [{
					label: 'Top 10 Privacy Violators',
					backgroundColor: '#21c6ce',
					data: top10.map(company => company.totalAmount)
				}]
			};
    },
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

		.general-info-card {
			border-radius: 1rem;
			flex: 1;
			padding: 2rem;
			margin: 1rem;
			background-color: white;
		}
	}

	.charts-container {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;

		.chart-container {
			border-radius: 1rem;
			flex: 1;
			padding: 2rem;
			margin: 1rem;
			background-color: white;

			.chart {
				max-width: 40%;
				margin: 2rem 0;

				@media (max-width: $tablet-sm) {
					max-width: 80%;
					margin: 4rem 0;
				}
			}

			.insight-header {
				display: flex;
				align-items: center;

				.lightbulb {
					background-color: $main-color;
					border-radius: 50%;
					padding: 1.2rem;
					margin: 1rem 1rem 1rem 0;
					color: white;
				}

				h4 {
					color: $main-color;
				}
			}
		}
	}
	
}
</style>