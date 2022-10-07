<template>
        <h3 class="display-6">Détails d'une personne</h3>
    <hr>
    <form >
        <div class="row">
            <div class="col">
                <div class="mb-2 row">
                    <div class="col-4">
                        <label for="firstname" class="form-label">Prénom : </label>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="John" v-model="p.firstname" readonly>
                    </div>
                </div>
                <div class="mb-2 row">
                    <div class="col-4">
                        <label for="email" class="form-label">Email : </label>
                    </div>
                    <div class="col">
                        <input type="email" class="form-control" placeholder="j.dupont@example.com" v-model="p.email" readonly>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="mb-2 row">
                    <div class="col-4">
                        <label for="lastname" class="form-label">Nom de famille : </label>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="DUPONT" v-model="p.lastname" readonly>
                    </div>
                </div>
                <div class="mb-2 row">
                    <div class="col-4">
                        <label for="phoneNumber" class="form-label">Téléphone : </label>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="+00 123 456 789" v-model="p.phoneNumber" readonly>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="text-end">
                <router-link class="btn btn-outline-light" to="/people"><i class="bi bi-arrow-counterclockwise"></i> Retour</router-link>
            </div>
        </div>
    </form>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                p: {}
            }
        },
        mounted() {
            const id = this.$route.params.id
            axios.get(`https://vue-m2i-moving-out-default-rtdb.europe-west1.firebasedatabase.app/people/${id}.json`).then(res => {
                console.log(res.data)
                this.p = {id, ...res.data}
            })
        }
    }
</script>