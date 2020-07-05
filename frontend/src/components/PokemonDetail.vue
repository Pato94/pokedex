<template>
  <div v-if="pokemon != null" class="container">
    <p class="name">{{ pokemon.name }} {{ number }}</p>
    <div class="photo-and-details">
      <img class="photo" :src="pokemon.image" />
      <div class="details">
        <p v-if="description != null">{{ description }}</p>
        <div class="features">
          <div class="feature">
            <span class="title">Altura</span>
            <span class="content">{{ height }}</span>
          </div>

          <div class="feature">
            <span class="title">Categoría</span>
            <span class="content">{{ category }}</span>
          </div>

          <div class="feature">
            <span class="title">Peso</span>
            <span class="content">{{ weight }}</span>
          </div>

          <div class="feature">
            <span class="title">Habilidad</span>
            <span class="content">{{ ability }}</span>
          </div>
        </div>
        <div>
          <div class="types">
            <h2>Tipo</h2>
          </div>
          <div class="types">
            <p v-for="type in types" :key="type" class="type" :class="type">{{ type }}</p>
          </div>
        </div>
        <div class="stats">
          <h2 style="padding-top:10px">Puntos de base</h2>
        <div class= "grilla">
          <div class="stat">
            <span class="nombre">Vida</span>
            <br />
            <span class="valor">{{statVida}}</span>
          </div>
          <div class="stat">
            <span class="nombre">Ataque</span>
            <br />
            <span class="valor">{{statAtaque}}</span>
          </div>
          <div class="stat">
            <span class="nombre">Defensa</span>
            <br />
            <span class="valor">{{statDefensa}}</span>
          </div>
          <div class="stat">
            <span class="nombre">Velocidad</span>
            <br />
            <span class="valor">{{statVelocidad}}</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>Cargando...</div>
</template>

<script>
import axios from "axios";

const getPokemonData = id => {
  return axios
    .get(`http://localhost:3000/pokemons/${id}`)
    .then(response => response.data);
};

export default {
  name: "PokemonDetail",
  data() {
    return {
      pokemon: null
    };
  },
  created() {
    console.log(this.$route.params.id);
    getPokemonData(this.$route.params.id).then(data => (this.pokemon = data));
  },
  computed: {
    description: function() {
      if (this.pokemon == null) {
        return "";
      }
      return this.pokemon.description;
    },
    number: function() {
      let paddedNumber = this.pokemon.id.toString().padStart(3, "0");
      return `#${paddedNumber}`;
    },
    height: function() {
      const pokemon = this.pokemon;
      if (pokemon == null) {
        return "";
      }
      return pokemon.height;
    },
    category: function() {
      const pokemon = this.pokemon;
      if (pokemon == null) {
        return "";
      }
      return pokemon.category;
    },
    weight: function() {
      const pokemon = this.pokemon;
      if (pokemon == null) {
        return "";
      }
      return pokemon.weight;
    },
    ability: function() {
      const pokemon = this.pokemon;
      if (pokemon == null) {
        return "";
      }
      return pokemon.ability;
    },
    types: function() {
      return this.pokemon.types.map(t => t.toLowerCase());
    },
    statVida: function() {
      return this.pokemon.ps;
    },
    statAtaque: function() {
      return this.pokemon.attack;
    },
    statDefensa: function() {
      return this.pokemon.defense;
    },
    statVelocidad: function() {
      return this.pokemon.speed;
    }
  }
};
</script>

<style scoped>
.name {
  text-transform: capitalize;
  font-size: 3rem;
}

.photo-and-details {
  display: flex;
  flex-direction: row;
  padding: 10px;
}

.photo {
  width: 50%;
  margin-right: 10px;
  background: #f2f2f2;
}

.details {
  width: 50%;
  font-size: 1.5rem;
}

.features {
  font-size: 1.2rem;
  background: #2fa7d7;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  flex: 1 1 0;
  padding: 10px 40px;
}

.feature {
  display: flex;
  flex-basis: 50%;
  align-items: flex-start;
  flex-direction: column;
}

.title {
  color: white;
}

.content {
  color: black;
}

.types {
  margin: 10px 0;
  display: flex;
  justify-content: center;
}

.type {
  min-width: 110px;
  padding: 4px;
  margin: 0 8px 0 0;
  border-radius: 5px;
  text-transform: capitalize;
}

.stats {
  background-color: #a4a4a4;
  border-radius: 25px;
}
.grilla {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  flex: 1 1 0;
  padding: 10px 40px;
}

.stat {
  display: flex;
  flex-basis: 50%;
  align-items: flex-start;
  flex-direction: column;
  padding-bottom: 10px;
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
