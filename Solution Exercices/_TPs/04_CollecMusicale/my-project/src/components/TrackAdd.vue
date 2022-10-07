<template>
    <div class="modal-bg" @click="cancelAdd"></div>
    <div class="modal-fg bg-light rounded text-dark p-3">
        <div class="d-flex align-items-center">
            <h3 class="d-inline me-auto">Ajouter une piste</h3>
            <i class="bi bi-x-lg" @click="cancelAdd"></i>
        </div>
        <hr>
        <form @submit.prevent="onSubmit()">
            <div class="row mb-2">
                <div class="col-4">
                    <label for="name" class="form-label">Name: </label>
                </div>
                <div class="col">
                    <input type="text" class="form-control" id="name" name="name" v-model="name">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-4">
                    <label for="artist" class="form-label">Artist: </label>
                </div>
                <div class="col">
                    <input type="text" class="form-control" id="artist" name="artist" v-model="artist">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-4">
                    <label for="duration" class="form-label">Duration: </label>
                </div>
                <div class="col">
                    <div class="row row-cols-5">
                        <div class="col-2">
                            <input type="number" class="form-control" id="durationMin" name="durationMin" v-model.number="durationMin">
                        </div>
                        <div class="col-auto">
                            :
                        </div>
                        <div class="col-2">
                            <input type="number" class="form-control" id="durationSec" name="durationSec" v-model.number="durationSec">
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div class="text-end">
                <button class="btn btn-secondary" :disabled="!isSendable">
                    <i class="bi bi-send"></i> Ajouter
                </button>
            </div>
        </form>

    </div>
</template>

<script>
export default {
    emits: ['cancelAdd', 'addTrack'],
    data() {
        return {
            name: "",
            nameTouched: false,
            artist: "",
            artistTouched: false,
            durationMin: 0,
            durationMinTouched: false,
            durationSec: 0,
            durationSecTouched: false
        }
    },
    methods: {
        onSubmit() {
            this.$emit('addTrack', {
                name: this.name,
                artist: this.artist,
                duration: this.durationMin * 60 + this.durationSec
            })
        },
        cancelAdd() {
            this.$emit('cancelAdd')
        }
    },
    computed: {
        isSendable() {
            return !!this.name && !!this.artist && !!this.durationMin && !!this.durationSec
        }
    },
    watch: {
        durationMin() {
            this.durationMinTouched = true
        },
        durationSec() {
            this.durationSecTouched = true
        },
        name() {
            this.nameTouched = true
        },
        artist() {
            this.artistTouched = true
        }
    }
}
</script>

<style scoped>
.modal-bg {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 50;
}

.modal-fg {
    position: fixed;
    top: calc((100vh - 40vh) / 2);
    left: calc((100vw - 60vw) / 2);
    height: 40vh;
    width: 60vw;
    z-index: 100;
}
</style>