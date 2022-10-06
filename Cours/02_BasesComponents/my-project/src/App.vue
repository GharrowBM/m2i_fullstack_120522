<template>
  <!-- Pour faire appel à un composant dans notre HTML, on se sert de sa balise.
    Cette balise correspond au nom que l'on a importé dans notre section script -->
  <MyComponent/>

  <MainComponent/>

    <DemoSlots>
      <p>Injecté dans le slot défaut</p>

      <!-- Pour injecter de l'HTML dans les autres slots de notre composant, 
        il nous faut utiliser des templates portant la directive v-slot 
        suivi du nom du slot que l'on veut cibler -->
        
      <!-- <template v-slot:blabla> -->
      <template #blabla>
        <p>Injecté dans le slot blabla par le parent</p>
      </template>
    </DemoSlots>
</template>

<script>
  // On peut importer un ou plusieurs composants dans un composant (ici le composant racine App)
import MyComponent from './components/MyComponent.vue'
import MainComponent from './components/MainComponent.vue';
import DemoSlots from './components/DemoSlots.vue';

// Une application Vue SPA va avoir plusieurs objets de composants qui vont pouvoir posséder 
// les mêmes propriétés que l'on a vu jusqu'à maintenant : data, methods, computed et watch
// Elle pourra en avoir d'autre, par exemple name et components 
export default {
  name: 'App',

  // La propriété components contient un objet qui relie les composants externes à ce composant 
  // dans le but de pouvoir les utiliser dans notre composant actuel
  components: {
    MyComponent,
    MainComponent,
    DemoSlots
},
  data() {

  },
  methods: {},
  computed: {},
  watch: {}
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
