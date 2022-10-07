<template>
  <p>App</p>
  <ul>
    <li>
      <!-- Si l'on veut naviguer via des liens entre les pages de notre application, 
        il va falloir utiliser les router-link (qui deviendront à la fin des 
        balises <a> avec empêchement du rafraichissement) -->

          <!-- On fixe le lien (vers où on veut aller) avec 
            l'attribut 'to' de notre router-link -->
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/about">About</router-link>
    </li>
    <!-- <li v-for="(l, i) in myLinks" :key="i">
      <router-link :to="l.link">{{l.name}}</router-link>
    </li> -->
  </ul>
  <!-- Pour ajouter l'injection à un emplacement de notre page des routes, 
    il nous faut ajouter la balise router-view -->
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      // myLinks: [
      //   {
      //     link: '/',
      //     name: 'Home'
      //   },
      //   {
      //     link: '/about',
      //     name: 'About'
      //   }
      // ]
    }
  }
}
</script>