<template>
  <div class="container">
    <ExoCompteur />
  </div>
</template>

<script>
  import ExoCompteur from './components/ExoCompteur.vue';

export default {
  name: 'App',
  components: {
    ExoCompteur
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
