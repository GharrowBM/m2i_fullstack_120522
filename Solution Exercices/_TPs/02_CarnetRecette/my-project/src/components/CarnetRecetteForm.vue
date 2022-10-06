<template>
    <div class="form-floating mb-2">
        <input type="text" class="form-control" id="title" placeholder="Recipe A..." v-model="title">
        <label for="title" class="text-black">Title</label>
    </div>
    <div class="form-floating mb-2">
        <textarea name="description" id="description" rows="10" class="form-control" placeholder="Description of..." v-model="description"></textarea>
            <label for="description" class="text-black">Description</label>
    </div>
    <div class="text-end">
        <button class="btn btn-outline-light" :disabled="!isSendable" @click="onAddRecipe"><i class="bi bi-send"></i> Ajouter</button>
    </div>
</template>

<script>
    export default {
        emits: ['addRecipe'],
        data() {
            return {
                title: "",
                description: ""
            }
        },
        methods: {
            onAddRecipe() {
                if (this.title && this.description) {
                    this.$emit("addRecipe", {title: this.title, description: this.description})
                }
            }
        },
        computed: {
            isSendable() {
                return !!this.title && !!this.description
            }
        }
    }
</script>

<style scoped>
    textarea {
        resize: none;
        height: 200px !important;
    }
</style>