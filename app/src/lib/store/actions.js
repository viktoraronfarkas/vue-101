import {
  validateGuess,
  createCleanCard,
  getCardAPI,
  getDeckAPI,
} from '@/lib/game';

export default {
  setNextGuess({ commit }, color) {
    commit('setNextGuess', color);
  },

  async getDeck({ commit }) {
    const { deck_id } = await fetch(getDeckAPI()).then((r) => r.json());
    commit('setDeckId', deck_id);
  },

  async drawCard({ state, commit, getters }) {
    const { cards } = await fetch(getCardAPI(state.guesser.deckId)).then((r) =>
      r.json()
    );

    const card = cards[0];

    // +1 the guess counter
    commit('incrementGuesses');

    // +1 the point counter if you guessed correctly
    if (validateGuess(card, state.guesser.nextGuess)) {
      commit('incrementPoints');
    }

    commit('pushNewCard', createCleanCard(card));
  },
};
