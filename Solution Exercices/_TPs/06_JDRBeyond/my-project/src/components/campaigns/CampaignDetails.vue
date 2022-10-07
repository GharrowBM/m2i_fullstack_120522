<template>
    <form>
        <h6 class="my-2 text-center text-warning">Basic Informations</h6>
        <br>
        <div class="row">
            <div class="col">
                <div class="row mb-2">
                    <div class="col-4">
                        <label for="name" class="form-label">Name: </label>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" v-model="c.name" readonly>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="row mb-2">
                    <div class="col-4">
                        <label for="gameMaster" class="form-label">Gamemaster: </label>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" v-model="c.gameMaster" readonly>
                    </div>
                </div>
            </div>
        </div>
        <hr class="w-50 mx-auto text-warning">
        <h6 class="my-2 text-center text-warning">Characters</h6>
        <br>
        <div class="row px-4">
            <select name="players" id="players" class="form-select" v-model="c.characters" multiple disabled v-if="c.characters">
                <option v-for="(c) in c.characters" :value="c" :key="c.id">{{c.name}}</option>
            </select>
        </div>
        <hr>
        <div class="text-end">
            <router-link class="btn btn-outline-light" to="/campaigns"><i class="bi bi-arrow-counterclockwise"></i> Retour</router-link>
        </div>
    </form>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                c: {}
            }
        },
        mounted() {
            const id = this.$route.params.id
            axios.get(`https://vue-m2i-jdr-beyond-default-rtdb.europe-west1.firebasedatabase.app/campaigns/${id}.json`).then(res => {
                this.c = res.data
            })
        }
    }
</script>