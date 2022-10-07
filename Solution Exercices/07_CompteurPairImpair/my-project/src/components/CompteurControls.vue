<template>
    <div class="d-flex p-2">
        <button class="btn btn-outline-secondary me-1" :disabled="countStatus" @click="onReset">
            <i class="bi bi-arrow-counterclockwise"></i>
        </button>
        <button class="btn btn-outline-success me-1" :disabled="countStatus" @click="onStart">
            <i class="bi bi-play"></i>
        </button>
        <button class="btn btn-outline-warning"  :disabled="!countStatus" @click="onStop">
            <i class="bi bi-pause"></i>
        </button>
    </div>
</template>

<script>
    export default {
        props: ['countStatus'],
        emits: ['countReset', 'countStart', 'countStop'],
        methods: {
            onReset() {
                this.$emit('countReset')
            },
            onStart() {
                this.$emit('countStart')
            },
            onStop() {
                this.$emit('countStop')
            }
        }
    }
</script>