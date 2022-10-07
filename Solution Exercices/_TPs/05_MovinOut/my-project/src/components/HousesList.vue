<template>
    <div class="row">
        <div class="text-end">
            <router-link to="/people" class="btn btn-outline-light">Voir les personnes</router-link>
        </div>
    </div>
    <div class="row">
        <h3 class="display-6">Liste des Logements</h3>
        <hr>
        <table class="table table-dark text-center">
            <thead>
                <tr>
                    <th scope="col">Numéro</th>
                    <th scope="col">Intitulé</th>
                    <th scope="col">Code Postal</th>
                    <th scope="col">Commune</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(h, i) in houses" :key="i">
                    <td>{{h.streetNumber}}</td>
                    <td>{{h.streetName}}</td>
                    <td>{{h.postalCode}}</td>
                    <td>{{h.cityName}}</td>
                    <td class="d-flex justify-content-center">
                        <router-link class="me-2 btn btn-outline-info" :to="`/houses/details/${h.id}`"><i class="bi bi-eye"></i> Details</router-link>
                        <router-link class="me-2 btn btn-outline-secondary" :to="`/houses/edit/${h.id}`"><i class="bi bi-pencil-square"></i> Edit</router-link>
                        <router-link class="btn btn-outline-danger" :to="`/houses/delete/${h.id}`"><i class="bi bi-trash"></i> Delete</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
        <hr>
        <div class="text-end">
            <router-link class="btn btn-outline-success" to="/houses/add">
                <i class="bi bi-plus-circle"></i> Ajouter
            </router-link>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                houses: []
            }
        },
        mounted() {
            axios.get('https://vue-m2i-moving-out-default-rtdb.europe-west1.firebasedatabase.app/houses.json').then(res => {
                for(const key in res.data) {
                    this.houses.push({id: key, ...res.data[key]})
                }
            })
        }
    }
</script>