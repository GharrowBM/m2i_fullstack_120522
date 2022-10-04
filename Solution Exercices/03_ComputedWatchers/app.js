const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        }
    },
    computed: {
        counterDisplay() {
            if (this.counter % 15 == 0 && this.counter != 0) return "FizzBuzz"
            else if (this.counter % 5 == 0 && this.counter != 0) return "Buzz"
            else if (this.counter % 3 == 0 && this.counter != 0) return "Fizz"
            else return this.counter
        }
    },
    watch: {
        counter() {
            setTimeout(() => {
                this.counter = 0
            }, 15000)
        }
    },
    methods: {
        increment() {
            this.counter++
        },
        decrement() {
            if (this.counter > 0) this.counter--
        }
    }
});

app.mount('#app');