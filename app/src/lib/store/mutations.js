export default {
  incrementPoints(state) {
    state.guesser.points++;
  },
  incrementGuesses(state) {
    state.guesser.guesses++;
  },
  setDeckId(state, deckId) {
    state.guesser.deckId = deckId;
  },
  setNextGuess(state, color) {
    state.guesser.nextGuess = color;
  },
  pushNewCard(state, newCard) {
    state.guesser.cards.push(newCard);
  },
};
