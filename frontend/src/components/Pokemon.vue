<template>
  <router-link :to="{ name: 'pokemon', params: { id: pokemon.id }}" tag="div">
    <div class="container">
      <img class="sprite" :src="pokemon.image" />
      <p class="id">{{ number }}</p>
      <p class="name">{{ pokemon.name }}</p>
      <div class="types">
        <p v-for="type in types" :key="type" class="type" :class="type">{{ type }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Pokemon",
  props: {
    pokemon: Object
  },
  computed: {
    types: function() {
      return this.pokemon.types.map(t => t.toLowerCase());
    },
    number: function() {
      let paddedNumber = this.pokemon.id.toString().padStart(3, "0");
      return `#${paddedNumber}`;
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-size: cover;
}

.sprite {
  display: block;
  background: #f2f2f2;
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.id {
  color: #919191;
  margin: 4px 0 0 0;
}

.name {
  color: #313131;
  font-size: 1.5em;
  margin: 10px 0 0 0;
  text-transform: capitalize;
}

.types {
  margin: 10px 0;
  display: flex;
}

.type {
  min-width: 110px;
  padding: 4px;
  margin: 0 8px 0 0;
  border-radius: 5px;
  text-transform: capitalize;
}

.planta {
  background: #9bcc55;
}

.veneno {
  background: #b97fc9;
}

.fuego {
  background: #fd7d24;
}

.volador {
  background: #3dc7ef;
}

.agua {
  background: #4592c4;
}

.bicho {
  background: #729f3f;
}
</style>
