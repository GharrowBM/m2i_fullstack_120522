const app = Vue.createApp({
    data() {
        return {
            animal: {
                name: "Blanco",
                portraitURL: "https://di262mgurvkjm.cloudfront.net/eac1aef4-00cb-43be-9fb3-fc27a433bb4e/20150121148PLANARIOKO_xgaplus.jpg",
                breed: "Angora",
                age: 4,
                toys: ["Wool Ball", "Plastic Mouse", "Cat Masmerizer"]
            }
        }
    },
    methods: {
        randomizeAnimalToy() {
            return this.animal.toys[Math.floor(Math.random() * this.animal.toys.length)]
        }
    }
});

app.mount('#animal-card');