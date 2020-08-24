import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        // Colors are taken from the design system for CommitHub
        primary: "#3282B8",
        secondary: "#424242",
        accent: "#21C6CE",
        error: "#C72C41", // danger
        info: "#2196F3",
        success: "#29C7AC",
        warning: "#FFBF00"
      }
    }
  },
  icons: {
    iconfont: "fa"
  }
});
