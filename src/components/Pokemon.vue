<template>
    <div>
    <img :src="pokemon.sprites.front_default" style=margin-top:20px>
    <h5 style="color: #919191">N 00{{ pokemon.id }}</h5>
    <div style="font-style: italic">
        {{ pokemon.name }}
    </div>
    <div>
       <a style="background-color:#9bcc50 ;width:10px;border-radius:5px;">planta </a>
       <a style="background-color:purple ; width:10px;color:white;border-radius:5px;"> veneno </a>
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
