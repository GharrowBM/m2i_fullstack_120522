<template>
    <p>The is the details for : {{ name }}</p>
</template>

<script>
    export default {
        data() {
            return {
                name: ''
            }
        },

        // Si l'on veut, on peut récupérer des valeurs à différents cycles de vie de notre application, ici avant que l'HTML soit rendu via beforeMount()
        // De la sorte, je peux récupérer les paramètres de la route et les fixer dans les variables de mon composant
        beforeMount() {
            this.name = this.$route.params.name
        },
    }
</script>