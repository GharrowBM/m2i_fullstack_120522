<template>
  <div class="container">
    <CarnetRecette />
  </div>
</template>

<script>
import CarnetRecette from './components/CarnetRecette.vue';

export default {
  name: 'App',
  components: {
    CarnetRecette
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
