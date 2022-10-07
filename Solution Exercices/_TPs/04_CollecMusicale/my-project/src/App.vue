<template>
  <div class="container">
    <CollectionMusicale />
  </div>
</template>

<script>
import CollectionMusicale from './components/CollectionMusicale.vue'

export default {
  name: 'App',
  components: {
    CollectionMusicale
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
