<template>
  <div class="container">
    <FormulaireContacts />
  </div>
</template>

<script>
import FormulaireContacts from './components/FormulaireContacts.vue'

export default {
  name: 'App',
  components: {
    FormulaireContacts
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
