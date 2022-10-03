const { createApp } = Vue

createApp({
    // L'objet de création d'application peut contenir des variables dans son objet de retour de data()
    data() {
        return {
            message: 'Hello world !',
            nombre: 0,
            imageURL: 'https://i-reg.unimedias.fr/sites/art-de-vivre/files/styles/recipe/public/r94-gateau-cremeux-chocolat-entremets_ss.jpg?auto=compress%2Cformat&crop=faces%2Cedges&cs=srgb&fit=crop&h=500&w=393'
        }
    },

    // L'objet de création d'application peut aussi contenir des fonctionnalités dans sa propriété methods, 
    // qui possède comme valeur un nouvel objet contenant les méthodes
    methods: {
        getRandNumber() {

            // Au sein d'une méthode, on peut modifier nos variables contenues dans data() 
            // via l'utilisation du mot-clé this

            this.message = "J'ai eu un nombre aléatoire !"
            
            
            this.nombre = Math.round(Math.random() * 6)
        },
        logKey(e) {
            console.log(e.target.value)
        },
        inputLog() {
            console.log('Input !')
        }
    }
}).mount('#app')