<template>
    <h3 class="display-6">Editer une habitation</h3>
    <hr>
    <form @submit.prevent="onSubmit">
        <div class="row">
            <div class="col">
                <div class="mb-2 row">
                    <div class="col-4">
                        <label for="streetNumber" class="form-label">Numéro : </label>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="470" v-model.number="h.streetNumber">
                    </div>
                </div>
                <div class="mb-2 row">
                    <div class="col-4">
                        <label for="postalCode" class="form-label">Code Postal : </label>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="75000" v-model="h.postalCode">
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="mb-2 row">
                    <div class="col-4">
                        <label for="streetName" class="form-label">Nom de voie : </label>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Rue des Fleurs" v-model="h.streetName">
                    </div>
                </div>
                <div class="mb-2 row">
                    <div class="col-4">
                        <label for="cityName" class="form-label">Commune : </label>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="PARIS" v-model="h.cityName">
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="text-end">
                <button class="btn btn-outline-light"><i class="bi bi-send"></i> Modifier</button>
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
        methods: {
            onSubmit() {
                axios.patch(`https://vue-m2i-moving-out-default-rtdb.europe-west1.firebasedatabase.app/houses/${this.h.id}.json`, {
                    streetNumber: this.h.streetNumber,
                    streetName: this.h.streetName,
                    postalCode: this.h.postalCode,
                    cityName: this.h.cityName
                }).then(() => {
                    this.$router.push('/houses')
                })
            }
        },
        mounted() {
            const id = this.$route.params.id
            axios.get(`https://vue-m2i-moving-out-default-rtdb.europe-west1.firebasedatabase.app/houses/${id}.json`).then(res => {
                this.h = {id, ...res.data}
            })
        }
    }
</script>