import { createStore } from 'vuex';
import mutations from './mutations';
import actions from './actions';

const store = createStore({
  state() {
    return {
      guesser: {
        deckId: undefined,
        cards: [],
        points: 0,
        guesses: 0,
        nextGuess: undefined,
      },
    };
  },
  mutations,
  actions,
});

export default store;
