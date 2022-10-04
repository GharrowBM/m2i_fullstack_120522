const app = Vue.createApp({
    data() {
        return {
            boxColor: "",
            boxShape: 0
        }
    },
    computed: {
        boxStyles() {
            return { backgroundColor: this.boxColor }
        },
        boxClasses() {
            if (!isNaN(this.boxShape)) return ""
            else return this.boxShape.toLowerCase()
        }
    }
});

app.mount('#app');