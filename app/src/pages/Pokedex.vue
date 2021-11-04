<script>
import Pokemon from '@/components/Pokemon.vue';

export default {
  data() {
    return {
      list: [],
    };
  },

  components: {
    Pokemon,
  },

  methods: {
    async fetchPokemon() {
      const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

      const data = await fetch(url);
      const pokemon = await data.json();

      this.list = pokemon.results;
    },
  },
};
</script>

<template>
  <h1>Pokedex</h1>

  <button @click="fetchPokemon">Catch Pokemon</button>

  <Pokemon v-for="(item, index) in list" :key="index" :pokemon="item" />
</template>
