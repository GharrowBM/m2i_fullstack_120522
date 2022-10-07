// Pour pouvoir réaliser du routing, il nous faut importer deux fonctions de vue-router

import { createRouter, createWebHistory } from "vue-router";
import HomeView  from './views/HomeView.vue'
// import AboutView from './views/AboutView.vue'

// Pour créer notre router, il nous faut créer une variable qui sera le résultat de notre fonction
// de création de router 
const router = createRouter({
    // history sert à fixer le fonctionnement de la navigation (suivant, précédent, aller à..., etc)
    history: createWebHistory(),

    // Les routes servent à fixer des liens entre l'URL et nos views / components
    routes: [
        {
            // Une route est un objet constitué de au moins deux propriétés :

            // Son chemin (par exemple monsite.com/mon-chemin)
            path: '/',

            // Le composant (ou idéalement la vue) auquel ce chemin va mener
            component: HomeView
        },
        {path: '/about', component:() => import('./views/AboutView.vue')},

        // On peut aussi avoir des paramètres de route en usant de la syntaxe
        // ci-dessous (ici on va stocker le paramètre dans 'name')
        {path: '/details/:name', component: () => import('./views/DetailsView.vue')}
    ]
})

// On oublie pas d'exporter le router pour pouvoir ensuite l'importer dans notre main.js
export default router