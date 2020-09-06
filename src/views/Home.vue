<template>
  <div id="home">
    <Dashboard />
    <List />
  </div>
</template>

<script>
import Dashboard from "@/components/Dashboard.vue";
import List from "@/components/List.vue";

export default {
  name: "home",
  components: {
    Dashboard,
    List
  }
};
</script>
