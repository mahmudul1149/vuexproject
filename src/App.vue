<template>
  <div id="app" class="container">
    <nav>
      <app-header></app-header>
    </nav>
    <router-view />
  </div>
</template>
<script>
import Header from "./views/HeaderVieew.vue";
export default {
  components: {
    appHeader: Header,
  },
};
</script>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
