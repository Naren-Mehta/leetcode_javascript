
//In weakMap, key should be Object else it will throw => TypeError: Invalid value used as weak map key
// weakMap will be available for Garbage Collection

let cardAce = {
  name: "Ace of Spades",
};

let cardKing = {
  name: "King of Clubs",
};

let deck = new WeakMap();
deck.set(cardAce, cardKing);


console.log(deck);


// for (entry of deck) {
//   console.log(entry);
// }
