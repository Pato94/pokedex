<template>
    <div id="app">
        <h1>Pokedex application</h1>
        <pokemon-grid v-if="pokemons != null" :pokemons="pokemons"/>
    </div>
</template>

<script>
    import PokemonGrid from "./components/PokemonGrid"
    import axios from "axios"

    const getPokemonData = name => {
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(response => {
                console.log(response);
                return response
            })
            .then(response => response.data)

    }
    export default {
        name: 'App',
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
                // .then(response => {
                //     console.log(response);
                //     return response
                // })
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

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
