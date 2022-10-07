<template>
    <div class="card">
        <div class="card-header bg-dark">
            <h3><i>{{album.title}}</i></h3>
        </div>
        <div class="card-body text-start text-dark">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <b>Score: </b> <i class="bi bi-star-fill text-warning" v-for="n in album.score" :key="n"></i><i
                        class="bi bi-star-fill text-secondary" v-for="n in (5 - album.score)" :key="n"></i>
                </li>
                <li class="list-group-item">
                    <b>Date de parution: </b> {{ album.releasedDate.toLocaleDateString() }}
                </li>
                <li class="list-group-item">
                    <div class="d-flex align-items-center">
                        <b class="me-auto">Pistes : </b>
                        <button class="btn btn-outline-secondary rounded-circle" @click="onAdding">+</button>
                        <TrackAdd v-if="isAdding" @cancelAdd="onCancelAdd" @addTrack="onAdded" />
                    </div>
                    <div v-for="(track, index) in album.tracks" :key="index" class="ms-2">
                        - "<i>{{ track.name }}</i>" from {{track.artist}} - {{ stringifyDuration(track.duration) }}
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import TrackAdd from './TrackAdd.vue';
export default {
    components: { TrackAdd },
    props: ["album"],
    emits: ['addTrackToAlbum'],
    data() {
        return {
            isAdding: false
        }
    },
    methods: {
        stringifyDuration(duration) {
            let time = new Date(duration * 1000);
            return time.getMinutes().toString().padStart(2, "0") + ":" + time.getSeconds().toString().padStart(2, "0");
        },
        onAdding() {
            this.isAdding = true;
        },
        onCancelAdd() {
            this.isAdding = false;
        },
        onAdded(e) {
            this.isAdding = false;
            this.$emit('addTrackToAlbum', {album : this.album, newTrack: e})
        }
    },
    mounted() {
        console.log(this.album);
    }
}
</script>