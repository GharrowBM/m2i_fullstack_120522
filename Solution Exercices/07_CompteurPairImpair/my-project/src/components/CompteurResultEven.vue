<template>
    <div class="my-2 row p-2 border border-info text-info mx-2 rounded">
        <div class="col-4 border-end border-info">
            <span>{{ number }}</span>
        </div>
        <div class="col">
            <span>PAIR</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['number']
    }
</script>