import Vue from "vue";
import router from "./router";
import App from "./App.vue";
import store from "./store/index";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";

library.add(faLightbulb);
library.add(faFontAwesome);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
  store: store
}).$mount("#app");
