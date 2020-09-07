import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Company from "./views/Company.vue";
import Mission from "./views/Mission.vue";
import PageNotFound from "./views/PageNotFound.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/company/:id",
      name: "company",
      component: Company
    },
    {
      path: "/mission",
      name: "mission",
      component: Mission
    },
    {
      path: "*",
      name: "404: Page Not Found",
      component: PageNotFound
    }
  ]
});
