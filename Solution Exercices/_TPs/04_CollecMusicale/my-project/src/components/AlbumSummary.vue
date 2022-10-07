<template>
    <div class="row p-2 m-2 rounded-custom border" :class="[active ? 'bg-success border-warning' : 'bg-dark border-info']">
        <!-- <div class="border-end col-auto" :class="[active ? 'border-dark text-dark' :'border-light text-white']">
            <b> {{ album.id.toString().padStart(3, '0') }} </b>
        </div> -->
        <div class="border-end text-start col" :class="[active ? 'border-dark text-dark' :'border-light text-white']">
            <b> {{ album.title }} </b>
        </div>
        <div class="col-auto text-start">
            <i class="bi bi-star-fill text-warning" v-for="n in album.score" :key="n"></i><i class="bi bi-star-fill text-secondary" v-for="n in (5 - album.score)" :key="n"></i>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['album', 'active']
    }
</script>

<style scoped>
    .rounded-custom {
        border-radius: 5rem;
    }
</style>