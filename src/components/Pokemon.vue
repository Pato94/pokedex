<template>
    <div style="font-style: italic">
        {{ pokemon.name }}
    </div>
</template>

<script>
    export default {
        name: "Pokemon",
        props: {
            pokemon: Object
        }
    }
</script>

<style scoped>

</style>
