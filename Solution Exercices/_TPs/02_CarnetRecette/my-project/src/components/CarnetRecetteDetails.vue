<template>
    <div class="row p-1 border border-info mx-3 rounded text-start my-2">
        <div class="col-8 d-flex align-items-center">
            <b>{{ recipe.title }}</b>
        </div>
        <div class="col-4 text-end">
            <button class="badge bg-dark" @click="activateDetails">{{ isActive ? "Hide" : "Details" }}</button>
        </div>
        <div claass="col-12" v-if="isActive">
            <hr>
            <p>{{ recipe.description }}</p>
            <div class="text-end">
                <button class="btn btn-outline-danger" @click="deleteRecipe"><i class="bi bi-trash"></i> Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['recipe', 'index'],
        emits: ['deleteRecipe'],
        data() {
            return {
                isActive: false
            }
        },
        methods: {
            activateDetails() {
                this.isActive = !this.isActive
            },
            deleteRecipe() {
                this.$emit("deleteRecipe", +this.index)
            }
        }

    }
</script>