<template>
    <h3 class="display-6">Détails d'une habitation</h3>
    <hr>
    <form>
        <div class="row">
            <div class="col">
                <div class="mb-2 row">
                    <div class="col-4">
                        <label for="streetNumber" class="form-label">Numéro : </label>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="470" v-model.number="h.streetNumber" readonly>
                    </div>
                </div>
                <div class="mb-2 row">
                    <div class="col-4">
                        <label for="postalCode" class="form-label">Code Postal : </label>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="75000" v-model="h.postalCode" readonly>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="mb-2 row">
                    <div class="col-4">
                        <label for="streetName" class="form-label">Nom de voie : </label>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Rue des Fleurs" v-model="h.streetName" readonly>
                    </div>
                </div>
                <div class="mb-2 row">
                    <div class="col-4">
                        <label for="cityName" class="form-label">Commune : </label>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="PARIS" v-model="h.cityName" readonly>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="text-end">
                <router-link class="btn btn-outline-light" to="/houses"><i class="bi bi-arrow-counterclockwise"></i> Retour</router-link>
            </div>
        </div>
    </form>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                h: {}
            }
        },
        mounted() {
            const id = this.$route.params.id
            axios.get(`https://vue-m2i-moving-out-default-rtdb.europe-west1.firebasedatabase.app/houses/${id}.json`).then(res => {
                this.h = {id: res.data, ...res.data}
            })
        }
    }
</script>