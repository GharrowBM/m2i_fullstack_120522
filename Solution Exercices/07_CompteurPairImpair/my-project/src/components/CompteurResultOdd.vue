<template>
    <div class="my-2 row p-2 border border-warning text-warning mx-2 rounded">
        <div class="col-4 border-end border-warning">
            <span>{{ number }}</span>
        </div>
        <div class="col">
            <span>IMPAIR</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['number']
    }
</script>