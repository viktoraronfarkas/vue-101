<script>
import Pokeman from '@/components/Pokeman.vue';

export default {
  components: {
    Pokeman,
  },

  data() {
    return {
      list: [],
    };
  },

  async mounted() {
    const localData = localStorage.getItem('pokemon');

    if (localData) {
      console.log('from storage');
      return (this.list = JSON.parse(localData));
    }

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

    const data = await fetch(url);
    const pokemon = await data.json();

    localStorage.setItem('pokemon', JSON.stringify(pokemon.results));

    console.log('from fetch');
    this.list = pokemon.results;
  },
};
</script>

<template>
  <div>
    <h1>Pokedex</h1>

    <Pokeman
      v-for="(item, index) in list"
      :key="index"
      :name="item.name"
      :index="index"
    />
  </div>
</template>
