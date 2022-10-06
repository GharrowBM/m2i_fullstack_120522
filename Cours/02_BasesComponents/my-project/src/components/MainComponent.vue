<template>
    <br>
    
    <button @click="switchComponent('TheAnimal')">Animal</button>
    <button @click="switchComponent('TheMasters')">Masters</button>
    <button @click="switchComponent('TheAdoptions')">Adoptions</button>

    <!-- Pour rendre un composant dynamique, on peut se servir de la balise component 
        et utiliser son attribut is auquel on lie une variable. Cette variable sera 
        le nom du composant qui prendra la place que l'on lui a 
        prévu (l'emplacement de <component></component>) -->
    
        <!--  Keep alive sert à conserver les changements de variables qui pourraient avoir eu lieu dans notre composant -->
    <keep-alive> 
        <component :is="selectedComponent"></component>
    </keep-alive>
</template>

<script>
    import TheAnimal from './others/TheAnimal.vue'
    import TheAdoptions from './others/TheAdoptions.vue'
    import TheMasters from './others/TheMasters.vue'

    export default {
        components: {
            TheAnimal,
            TheMasters, 
            TheAdoptions
        },
        data() {
            return {
                selectedComponent : 'TheMasters'
            }
        },
        methods: {
            switchComponent(componentName) {
                this.selectedComponent = componentName
            }
        }
    }
</script>