<template>
<div class="row">
        <h3 class="display-6">Liste des campagnes</h3>
        <hr>
        <table class="table table-dark text-center">
            <thead>
                <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Maître du Jeu</th>
                    <th scope="col">Nombre de sessions</th>
                    <th scope="col">Nombre de personnages</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(c, i) in campaigns" :key="i">
                    <td>{{c.name}}</td>
                    <td>{{c.gameMaster}}</td>
                    <td>{{c.sessions.length}}</td>
                    <td>{{c.characters?.length}}</td>
                    <td class="d-flex justify-content-center">
                        <router-link :to="`/campaigns/play/${c.id}`" class="btn btn-outline-success me-2"><i class="bi bi-play"></i> Jouer</router-link>
                        <router-link :to="`/campaigns/details/${c.id}`" class="btn btn-outline-info me-2"><i class="bi bi-eye"></i> Détails</router-link>
                        <router-link :to="`/campaigns/edit/${c.id}`" class="btn btn-outline-secondary me-2"><i class="bi bi-pencil-square"></i> Editer</router-link>
                        <router-link :to="`/campaigns/delete/${c.id}`" class="btn btn-outline-danger"><i class="bi bi-trash"></i> Supprimer</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
        <hr>
        <div class="text-end">
            <router-link to="/campaigns/add" class="btn btn-outline-success"><i class="bi bi-plus-circle"></i> Ajouter</router-link>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                campaigns: []
            }
        },
        mounted() {
            axios.get('https://vue-m2i-jdr-beyond-default-rtdb.europe-west1.firebasedatabase.app/campaigns.json').then(res => {
                for (const key in res.data) {
                    let campaign = {id: key, ...res.data[key]}
                    if (!campaign.sessions) campaign.sessions = []
                    this.campaigns.push(campaign)
                }
                console.log(this.campaigns)
            })
        }
    }
</script>