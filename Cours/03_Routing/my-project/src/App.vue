<template>
  <p>App</p>
  <!-- Pour ajouter l'injection à un emplacement de notre page des routes, 
    il nous faut ajouter la balise router-view -->
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>