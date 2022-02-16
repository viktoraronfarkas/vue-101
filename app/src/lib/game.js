function cardSymbol(suit) {
  switch (suit) {
    case 'CLUBS':
      return '♣️';
    case 'SPADES':
      return '♠️';
    case 'DIAMONDS':
      return '♦️';
    case 'HEARTS':
      return '♥️';
    default:
      break;
  }
}

export function createCleanCard({ value, suit, image }) {
  // Here's a clean card object that has a nice symbol
  return {
    value,
    image,
    symbol: cardSymbol(suit),
  };
}

export function validateGuess(card, nextGuess) {
  const colors = {
    SPADES: 'black',
    HEARTS: 'red',
    CLUBS: 'black',
    DIAMONDS: 'red',
  };

  const cardColor = colors[card.suit];

  return cardColor == nextGuess;
}

const API = 'https://deckofcardsapi.com/api/deck/new/shuffle/';

export function getDeckAPI() {
  return API;
}

export function getCardAPI(deckId) {
  return `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
}
