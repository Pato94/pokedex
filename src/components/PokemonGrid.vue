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
.pokemons {
    display: grid;
    grid-template-columns: repeat(auto-fit , minmax(300px, 1fr));
    grid-gap: 1rem;
    grid-auto-flow: dense;
    padding: 1rem;
}

</style>
