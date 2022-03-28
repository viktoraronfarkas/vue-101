<template>
  <div>
    <div class="hand" v-for="(card, index) in cards" :key="index">
      <img class="small" alt="Vue logo" :src="card.image">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hand',
  props: {
    cards: Array
  }
}
</script>