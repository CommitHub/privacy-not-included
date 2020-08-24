import Vue from "vue";
import router from "./router";
import App from "./App.vue";
import store from "./store/index";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
  vuetify,
  store: store
}).$mount("#app");
