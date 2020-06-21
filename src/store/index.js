import Vue from 'vue';
import Vuex from 'vuex';

import db from "../firebase/firebaseInit.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    companies: []
  },
  mutations: {
    getCompaniesData (state) {
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

            state.companies.push(data);
          });
        });
    }
  }
});

export default store;
