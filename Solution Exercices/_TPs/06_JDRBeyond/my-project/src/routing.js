import { createRouter, createWebHistory } from "vue-router"

import HomePage from './components/HomePage.vue'

import CharactersList from './components/CharactersList.vue'
import CharacterAdd from './components/characters/CharacterAdd.vue'
import CharacterDetails from './components/characters/CharacterDetails.vue'
import CharacterEdit from './components/characters/CharacterEdit.vue'
import CharacterDelete from './components/characters/CharacterDelete.vue'

import CampaignsList from './components/CampaignsList.vue'
import CampaignAdd from './components/campaigns/CampaignAdd.vue'
import CampaignDetails from './components/campaigns/CampaignDetails.vue'
import CampaignEdit from './components/campaigns/CampaignEdit.vue'
import CampaignDelete from './components/campaigns/CampaignDelete.vue'
import CampaignPlay from './components/campaigns/CampaignPlay.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HomePage},

        // Characters routes
        {path:'/characters', component: CharactersList},
        {path: '/characters/add', component: CharacterAdd},
        {path: '/characters/details/:id', component: CharacterDetails},
        {path: '/characters/edit/:id', component: CharacterEdit},
        {path: '/characters/delete/:id', component: CharacterDelete},

        // Campaign routes
        {path: '/campaigns', component: CampaignsList},
        {path: '/campaigns/add', component: CampaignAdd},
        {path: '/campaigns/details/:id', component: CampaignDetails},
        {path: '/campaigns/edit/:id', component: CampaignEdit},
        {path: '/campaigns/delete/:id', component: CampaignDelete},
        {path: '/campaigns/play/:id', component: CampaignPlay}
    ],
    linkExactActiveClass: 'active'
})

export default router