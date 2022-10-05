<template>
  <div class="container">
    <div class="p-3 text-start">
      <AlertSuccess />
      <AlertDanger />
      <AlertDanger />
      <AlertSuccess />
      <AlertInfo />
      <AlertWarning />
      <AlertInfo />

    </div>
  </div>
</template>

<script>
  import AlertSuccess from './components/AlertSuccess.vue';
  import AlertDanger from './components/AlertDanger.vue';
  import AlertInfo from './components/AlertInfo.vue';
  import AlertWarning from './components/AlertWarning.vue';

export default {
  name: 'App',
  components: {
    AlertSuccess,
    AlertDanger,
    AlertInfo,
    AlertWarning
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