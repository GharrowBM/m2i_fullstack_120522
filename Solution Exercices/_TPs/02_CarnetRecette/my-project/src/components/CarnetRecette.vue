<template>
    <div class="bg-dark rounded text-white p-3">
        <h1 class="display-6">Carnet de Recettes</h1>
        <div class="row">
            <div class="col-4">
                <h5>Nouvelle Recette</h5>
                <hr>
                <CarnetRecetteForm @addRecipe="onRecipeAdd"/>
            </div>
            <div class="col-8">
                <h5>Liste des Recettes</h5>
                <hr>
                <p v-if="recipes.length == 0">Il n'y a aucune recette dans le carnet !</p>
                <CarnetRecetteDetails v-else v-for="(recipe, index) in recipes" :key="index" :recipe="recipe" :index="index"
                    @deleteRecipe="onDeleteRecipe" />
            </div>
        </div>
    </div>
</template>

<script>
import CarnetRecetteDetails from './CarnetRecetteDetails.vue';
import CarnetRecetteForm from './CarnetRecetteForm.vue';

export default {
    components: {
        CarnetRecetteDetails,
        CarnetRecetteForm
    },
    data() {
        return {
            recipes: [
            {
                    title: "Recipe A",
                    description: "Description of Recipe A"
                },
                {
                    title: "Recipe B",
                    description: "Description of Recipe B"
                },
                {
                    title: "Recipe C",
                    description: "Description of Recipe C"
                },
                {
                    title: "Recipe D",
                    description: "Description of Recipe D"
                },
                {
                    title: "Recipe E",
                    description: "Description of Recipe E"
                }
            ]
        }
    },
    methods: {
        onDeleteRecipe(id) {
            this.recipes.splice(id, 1)
        },
        onRecipeAdd(recipe) {
            this.recipes.push(recipe)
        }
    }
}
</script>