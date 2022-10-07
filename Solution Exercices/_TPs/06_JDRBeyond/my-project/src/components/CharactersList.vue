<template>
    <div class="row">
        <h3 class="display-6">Liste des personnages</h3>
        <hr>
        <table class="table table-dark text-center">
            <thead>
                <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Race</th>
                    <th scope="col">Classe</th>
                    <th scope="col">Joueur</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(c, i) in characters" :key="i">
                    <td>{{c.name}}</td>
                    <td>{{c.race}}</td>
                    <td>{{c.charClass}}</td>
                    <td>{{c.player}}</td>
                    <td class="d-flex justify-content-center">
                        <router-link :to="`/characters/details/${c.id}`" class="btn btn-outline-info me-2"><i class="bi bi-eye"></i> Détails</router-link>
                        <router-link :to="`/characters/edit/${c.id}`" class="btn btn-outline-secondary me-2"><i class="bi bi-pencil-square"></i> Editer</router-link>
                        <router-link :to="`/characters/delete/${c.id}`" class="btn btn-outline-danger"><i class="bi bi-trash"></i> Supprimer</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
        <hr>
        <div class="text-end">
            <router-link to="/characters/add" class="btn btn-outline-success"><i class="bi bi-plus-circle"></i> Ajouter</router-link>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                characters: []
            }
        },
        mounted() {
            axios.get('https://vue-m2i-jdr-beyond-default-rtdb.europe-west1.firebasedatabase.app/characters.json').then(res => {
                for (const key in res.data) {
                    this.characters.push({id: key, ...res.data[key]})
                }
            })
        }
    }
</script>