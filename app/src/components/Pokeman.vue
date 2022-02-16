<template>
  <div>
    <img :src="imgString" alt="" />
    <h2>{{ name }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Pokeman',

  props: {
    name: String,
    index: Number,
  },

  computed: {
    imgString() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        this.index + 1
      }.png`;
    },
  },
};
</script>

<style></style>
