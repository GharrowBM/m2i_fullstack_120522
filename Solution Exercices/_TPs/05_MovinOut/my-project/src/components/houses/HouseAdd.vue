<template>
    <h3 class="display-6">Ajouter une habitation</h3>
    <hr>
    <form @submit.prevent="onSubmit">
        <div class="row">
            <div class="col">
                <div class="mb-2 row">
                    <div class="col-4">
                        <label for="streetNumber" class="form-label">Numéro : </label>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="470" v-model.number="streetNumber">
                    </div>
                </div>
                <div class="mb-2 row">
                    <div class="col-4">
                        <label for="postalCode" class="form-label">Code Postal : </label>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="75000" v-model="postalCode">
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="mb-2 row">
                    <div class="col-4">
                        <label for="streetName" class="form-label">Nom de voie : </label>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Rue des Fleurs" v-model="streetName">
                    </div>
                </div>
                <div class="mb-2 row">
                    <div class="col-4">
                        <label for="cityName" class="form-label">Commune : </label>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="PARIS" v-model="cityName">
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="text-end">
                <button class="btn btn-outline-light"><i class="bi bi-send"></i> Envoyer</button>
            </div>
        </div>
    </form>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                streetNumber: 0,
                streetName: "",
                postalCode: "",
                cityName: ""
            }
        },
        methods: {
            onSubmit() {
                if (!!this.streetNumber && !!this.streetName && !!this.postalCode && !!this.cityName) {
                    axios.post('https://vue-m2i-moving-out-default-rtdb.europe-west1.firebasedatabase.app/houses.json', {
                        streetNumber: this.streetNumber,
                        streetName: this.streetName,
                        postalCode: this.postalCode,
                        cityName: this.cityName
                    }).then(() => {
                        this.$router.push('/houses')
                    })
                }

            }
        }
    }
</script>