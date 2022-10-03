const app = Vue.createApp({
    data() {
        return {
            username: "",
            favRecipe: ""
        }
    },
    methods: {
        changeUsername(event) {
            this.username = event.target.value
        },
        changeFavRecipe(event) {
            this.favRecipe = event.target.value
        },
        rollDice() {
            alert(`Résultat du dé : ${Math.floor(Math.random() * 6 + 1)}`)
        }
    }
});

app.mount('#app');