<template>
    <div>
        <router-link to="/" style="text-decoration: none !important; color:inherit;outline:none;">
            <h1>Pokedex application</h1>
        </router-link>
        <pokemon-grid v-if="pokemons != null" :pokemons="pokemons"/>
    </div>
</template>

<script>
    import PokemonGrid from "./PokemonGrid"
    import axios from "axios"

    const getPokemonData = name => {
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(response => response.data)
    }
    export default {
        name: "Home",
        components: {
            PokemonGrid
        },
        data() {
            return {
                pokemons: null
            }
        },
        mounted() {
            axios.get("https://pokeapi.co/api/v2/pokemon?limit=10")
                .then(response => {
                    const promises = response.data.results.map(poke => {
                        return getPokemonData(poke.name)
                    });
                    return Promise.all(promises)
                })
                .then(pokemons => {
                    console.log(pokemons)
                    this.pokemons = pokemons
                })
        }
    }
</script>

<style scoped>

</style>
