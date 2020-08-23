import Vue from "vue";
import router from "./router";
import App from "./App.vue";
import store from "./store/index";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@fortawesome/fontawesome-free/css/all.css";

library.add(faLightbulb);
library.add(faSearch);
library.add(faHome);
library.add(faFontAwesome);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
  vuetify,
  store: store
}).$mount("#app");
