<template>
        <div class="row">
        <div class="text-end">
            <router-link to="/houses" class="btn btn-outline-light">Voir les habitations</router-link>
        </div>
    </div>
    <div class="row">
        <h3 class="display-6">Liste des Habitants</h3>
        <hr>
        <table class="table table-dark text-center">
            <thead>
                <tr>
                    <th scope="col">Prénom</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Téléphone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(p, i) in peoples" :key="i">
                    <td>{{p.firstname}}</td>
                    <td>{{p.lastname}}</td>
                    <td>{{p.phoneNumber}}</td>
                    <td>{{p.email}}</td>
                    <td class="d-flex justify-content-center">
                        <router-link class="me-2 btn btn-outline-info" :to="`/people/details/${p.id}`"><i class="bi bi-eye"></i> Details</router-link>
                        <router-link class="me-2 btn btn-outline-secondary" :to="`/people/edit/${p.id}`"><i class="bi bi-pencil-square"></i> Edit</router-link>
                        <router-link class="btn btn-outline-danger" :to="`/people/delete/${p.id}`"><i class="bi bi-trash"></i> Delete</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
        <hr>
        <div class="text-end">
            <router-link class="btn btn-outline-success" to="/people/add">
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
                peoples: []
            }
        },
        mounted() {
            axios.get('https://vue-m2i-moving-out-default-rtdb.europe-west1.firebasedatabase.app/people.json').then(res => {
                for (const k in res.data) {
                    this.peoples.push({id: k, ...res.data[k]})
                }
            })
        }
    }
</script>