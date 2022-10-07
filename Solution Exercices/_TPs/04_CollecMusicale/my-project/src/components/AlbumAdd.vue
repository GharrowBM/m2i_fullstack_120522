<template>
    <div class="modal-bg" @click="cancelAdd"></div>
    <div class="modal-fg bg-light rounded text-dark p-3">
        <div class="d-flex align-items-center">
            <h3 class="d-inline me-auto">Ajouter un Album</h3>
            <i class="bi bi-x-lg" @click="cancelAdd"></i>
        </div>
        <hr>
        <form @submit.prevent="onSubmit()">
            <div class="row mb-2">
                <div class="col-4">
                    <label for="title" class="form-label">Title: </label>
                </div>
                <div class="col">
                    <input type="text" class="form-control" id="title" name="title" v-model="title">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-4">
                    <label for="releasedDate" class="form-label">Release Date: </label>
                </div>
                <div class="col">
                    <input type="date" class="form-control" id="releasedDate" name="releasedDate" v-model="releasedDate">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-4">
                    <label for="score" class="form-label">Score: </label>
                </div>
                <div class="col">
                    <input type="number" class="form-control" id="score" name="score" v-model="score">
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
    emits: ['cancelAdd', 'addAlbum'],
    data() {
        return {
            title: "",
            titleTouched: false,
            releasedDate: "2000-01-01",
            releasedDateTouched: false,
            score: 0,
            scoreTouched: false
        }
    },
    methods: {
        onSubmit() {
            this.$emit('addAlbum', {
                title: this.title,
                releasedDate: new Date(this.releasedDate),
                score: this.score,
                tracks: {}
            })
        },
        cancelAdd() {
            this.$emit('cancelAdd')
        }
    },
    computed: {
        isSendable() {
            return !!this.title && this.releasedDate != new Date() && this.score > 0 && this.score < 6
        }
    },
    watch: {
        score() {
            this.scoreTouched = true
        },
        title() {
            this.titleTouched = true
        },
        releasedDate() {
            this.releasedDateTouched = true
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