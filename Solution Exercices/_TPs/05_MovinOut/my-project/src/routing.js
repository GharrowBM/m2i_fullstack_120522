import { createRouter, createWebHistory } from "vue-router"

import HousesList from './components/HousesList.vue'
import HouseAdd from './components/houses/HouseAdd.vue'
import HouseEdit from './components/houses/HouseEdit.vue'
import HouseDetails from './components/houses/HouseDetails.vue'
import HouseDelete from './components/houses/HouseDelete.vue'

import PeopleList from './components/PeopleList.vue'
import PeopleAdd from './components/people/PeopleAdd.vue'
import PeopleEdit from './components/people/PeopleEdit.vue'
import PeopleDetails from './components/people/PeopleDetails.vue'
import PeopleDelete from './components/people/PeopleDelete.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // Base route
        {path: '/', redirect: '/people'},

        // People routes
        {path: '/people', component: PeopleList},
        {path: '/people/add', component: PeopleAdd},
        {path: '/people/edit/:id', component: PeopleEdit},
        {path: '/people/details/:id', component: PeopleDetails},
        {path: '/people/delete/:id', component: PeopleDelete},

        // Houses routes
        {path: '/houses', component: HousesList},
        {path: '/houses/add', component: HouseAdd},
        {path: '/houses/edit/:id', component: HouseEdit},
        {path: '/houses/details/:id', component: HouseDetails},
        {path: '/houses/delete/:id', component: HouseDelete}
    ]
})

export default router