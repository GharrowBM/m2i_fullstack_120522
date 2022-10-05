<template>
    <p>MyComponent loaded !</p>

    <ChildComponent :firstname="firstname" @changeFirstname="onChangeFirstname($event)"/>
</template>

<script>
import ChildComponent from "./ChildComponent.vue"

export default {
    components: {
        ChildComponent
    },
    data() {
        return {
            firstname: "Bernard"
        }
    },
    methods: {
        onChangeFirstname(event) {
            this.firstname = event
        }
    }
}
</script>