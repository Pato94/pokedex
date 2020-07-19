<template>
  <div>
    <router-link
      to="/"
      style="text-decoration: none !important; color: inherit; outline: none;"
    >
      <h1>Pokedex application</h1>
    </router-link>
    <pokemon-grid v-if="pokemons != null" :pokemons="pokemons" />
  </div>
</template>

<script>
import PokemonGrid from "./PokemonGrid";
import axios from "axios";
const API_URL = process.env.VUE_APP_API_URL;

export default {
  name: "Home",
  components: {
    PokemonGrid,
  },
  data() {
    return {
      pokemons: null,
    };
  },
  mounted() {
    axios.get(`${API_URL}/pokemons`).then((response) => {
      console.log(response.data);
      this.pokemons = response.data;
    });
  },
};
</script>

<style scoped>
.pokemons {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  grid-auto-flow: dense;
  padding: 1rem;
}
</style>
