<template>
  <div class="game-overview">
    <h4>Game History</h4>
    <div class="white-text" v-for="(game, index) in gameResults" :key="index">
      Game {{ index + 1 }}: {{ game.result }} €{{ game.amount }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameHistory',
  props: {
    gameResults: Array
  }
}
</script>