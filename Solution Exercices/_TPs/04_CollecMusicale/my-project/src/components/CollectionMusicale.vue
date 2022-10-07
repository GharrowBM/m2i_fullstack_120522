<template>
    <div class="row">
        <div class="bg-dark rounded p-4 my-2 text-white">
            <h3 class="display-6">Collection Musicale</h3>
            <hr>
            <div class="row">
                <div class="col-4">
                    <div class="d-flex align-items-center px-2">
                        <h5 class="m-0 text-warning"><i>Liste des albums</i></h5>
                        <button class="btn btn-outline-light rounded-circle ms-auto" @click="onAdding()">+</button>
                        <AlbumAdd v-if="isAdding" @cancelAdd="onCancelAdd" @addAlbum="onAdded"/>
                    </div>
                    <div class="py-2">
                        <AlbumSummary v-for="album in albums" :key="album.id" :album="album"
                            :active="album == activeAlbum" @click="setActiveAlbum(album.id)" />
                    </div>
                </div>
                <div class="col">
                    <AlbumDetails v-if="activeAlbum" :album="activeAlbum" @addTrackToAlbum="onAddingTrackToAlbum" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AlbumSummary from "./AlbumSummary.vue";
import AlbumDetails from "./AlbumDetails.vue";
import AlbumAdd from "./AlbumAdd.vue";
import axios from 'axios'

export default {
    data() {
        return {
            isAdding: false,
            albums: [],
            activeAlbum: null
        };
    },
    methods: {
        setActiveAlbum(id) {
            this.activeAlbum = this.albums.find(x => x.id == id)
        },
        onAdding() {
            this.isAdding = true
        },
        onCancelAdd() {
            this.isAdding = false
        },
        onAdded(e) {
            this.isAdding = false
            console.log(e)
            axios.post(`https://vue-m2i-collec-musicale-default-rtdb.europe-west1.firebasedatabase.app/albums.json`, e).then(res => {
                this.albums.push({id: res.data.name + 1, ...e})
            })
            
        },
        onAddingTrackToAlbum(e) {
            axios.post(`https://vue-m2i-collec-musicale-default-rtdb.europe-west1.firebasedatabase.app/albums/${e.album.id}/tracks.json`, e.newTrack).then(res => {
                this.albums.find(x => x == e.album).tracks[res.data.name] = e.newTrack
            })
        }
    },
    components: { AlbumSummary, AlbumDetails, AlbumAdd },
    mounted() {
        axios.get(`https://vue-m2i-collec-musicale-default-rtdb.europe-west1.firebasedatabase.app/albums.json`).then(res => {
            console.log(res.data)
            for (const id in res.data) {
                let albumGot = {id: id, ...res.data[id], releasedDate: new Date(res.data[id].releasedDate)}
                if (!albumGot.tracks) albumGot.tracks = {}
                this.albums.push(albumGot)
            }
        })
    }
}
</script>