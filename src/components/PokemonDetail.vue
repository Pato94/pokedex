<template>
    <div v-if="pokemon != null" class="container">
        <p class="name">{{ pokemon.name }} {{ number }}</p>
        <div class="photo-and-details">
            <img class="photo" :src="pokemon.sprites.front_default"/>
            <div class="details" >
                <p v-if="description != null">
                    {{ description }}
                </p>
                <div class="features">
                    <div class="feature">
                        <span class="title">
                            Altura
                        </span>
                        <span class="content">
                            {{ height }}
                        </span>
                    </div>

                    <div class="feature">
                        <span class="title">
                            Categoría
                        </span>
                        <span class="content">
                            {{ category }}
                        </span>
                    </div>

                    <div class="feature">
                        <span class="title">
                            Peso
                        </span>
                        <span class="content">
                            {{ weight }}
                        </span>
                    </div>

                    <div class="feature">
                        <span class="title">
                            Habilidad
                        </span>
                        <span class="content">
                            {{ ability }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        Cargando...
    </div>
</template>

<script>
    import axios from "axios"

    const getPokemonData = id => {
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

            .then(response => response.data)
    }

    const getPokemonDescription = id => {
        return axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
            .then((response) => {
                console.log("TAKA")
                console.log(response)
                return response
            })
            .then(response => response.data.flavor_text_entries[0].flavor_text)
    }

    export default {
        name: "PokemonDetail",
        data() {
            return {
                pokemon: null,
                description: null
            }
        },
        created() {
            console.log(this.$route.params.id)
            getPokemonData(this.$route.params.id).then(data => this.pokemon = data)
            getPokemonDescription(this.$route.params.id).then(data => this.description = data)
        },
        computed: {
            number: function () {
                let paddedNumber = this.pokemon.id.toString().padStart(3, "0");
                return `#${paddedNumber}`
            },
            height: function() {
                const pokemon = this.pokemon
                if (pokemon == null) {
                    return ""
                }
                return `${pokemon.height} m`
            },
            category: function() {
                const pokemon = this.pokemon
                if (pokemon == null) {
                    return ""
                }
                return pokemon.types[0].type.name
            },
            weight: function() {
                const pokemon = this.pokemon
                if (pokemon == null) {
                    return ""
                }
                return `${pokemon.weight} kg`
            },
            ability: function() {
                const pokemon = this.pokemon
                if (pokemon == null) {
                    return ""
                }
                return pokemon.abilities[0].ability.name
            }
        }
    }
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
        background: #2FA7D7;
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
</style>
