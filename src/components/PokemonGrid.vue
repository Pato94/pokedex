<template>
    <ul class="pokemons">
        <li v-for="pokemon in pokemons" :key="pokemon.name">
            <pokemon :pokemon="pokemon" />
        </li>
    </ul>
</template>

<script>
    import Pokemon from "./Pokemon";
    export default {
        name: "PokemonGrid",
        components: {Pokemon},
        props: {
            pokemons: Array
        }
    }
</script>

<style scoped>

</style>
