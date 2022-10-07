<template>
    <div class="bg-dark rounded text-white p-3 col-md-8 offset-md-2">
        <h1 class="display-6 text-muted">Compteur</h1>
        <hr>
        <div class="row">
            <div class="col-4">
                <CompteurControls @countReset="onCountReset" @countStart="onCountStart" @countStop="onCountStop" :countStatus="countStatus"/>
            </div>
            <div class="col-4 text-warning">
                <h6>Nombres Impairs</h6>
                <hr>
                <CompteurResultOdd v-for="number in oddNumbers" :key="number" :number="number" />
            </div>
            <div class="col-4 text-info">
                <h6>Nombres Pairs</h6>
                <hr>
                <CompteurResultEven v-for="number in evenNumbers" :key="number" :number="number" />
            </div>
        </div>

    </div>
</template>

<script>
import CompteurControls from "./CompteurControls.vue";
import CompteurResultEven from "./CompteurResultEven.vue";
import CompteurResultOdd from "./CompteurResultOdd.vue";

export default {
    components: {
        CompteurControls,
        CompteurResultEven,
        CompteurResultOdd
    },
    data() {
        return {
            numbers: [],
            countdown: undefined,
            countStatus: false,
            iterator: 1
        }
    },
    methods: {
        onCountReset() {
            if (!this.countStatus) {
                this.numbers = []
                this.iterator = 1
            }
        },
        onCountStart() {
            if (!this.countStatus && !this.countdown) {
                this.countStatus = true
                this.countdown = setInterval(() => {
                    this.numbers.push(this.iterator++)
                }, 1000)
            }
        },
        onCountStop() {
            if (this.countStatus && this.countdown) {
                clearInterval(this.countdown)
                this.countdown = undefined
                this.countStatus = false
            }
        }
    },
    computed: {
        evenNumbers() {
            return this.numbers.filter(x => x % 2 == 0)
        },
        oddNumbers() {
            return this.numbers.filter(x => x % 2 != 0)
        }
    }
}
</script>