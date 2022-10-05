<template>
<p>ChildComponent loaded !</p>
<p>{{firstname}}</p>
<input type="text" v-model="newFirstname">
<br>
<button @click="changeFirstname()">Changer le prénom</button>
</template>

<script>
    export default {
        data() {
            return {
                newFirstname: this.firstname
            }
        },
        // Pour passer une variable d'un parent à un enfant, on se sert des props
        // Ces props peuvent être définies simplement via un tableau de string, 
        // ou offrir plus de contrôle en usant de la syntaxe en objet

        // props : ['firstname']
        props: {
            firstname: {
                type: String,
                default: "Test",
                required: true
            }
        },

        // Si l'on veut faire communiquer les enfants avec le parent, il va nous falloir émettre des évènements. 
        // On enregistre les évènements à soulever dans la propriété emits de notre objet 
        emits: ['changeFirstname'],
        methods: {
            changeFirstname() {

                // Au sein de la méthode, il va nous falloir émettre réellement l'évènement 
                // pour pouvoir ensuite le récolter au niveau du parent
                this.$emit('changeFirstname', this.newFirstname)
            }
        }
    }
</script>