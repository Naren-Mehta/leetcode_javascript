let cardAce = {
  name: "Ace of Spades",
};

let cardKing = {
  name: "King of Clubs",
};

let deck = new Map();
deck.set("as", cardAce);
deck.set("kc", cardKing);

console.log(deck);
console.log(typeof deck);
console.log(deck.size);

console.log(deck.get("as"));

// console.log(deck.delete('as'));
console.log(deck.keys());

// Iterating Map via key
for (key of deck.keys()) {
  console.log(key, deck.get(key));
}
console.log("=========================================================================")

// Iterating Map via value
console.log(deck.values());
for (value of deck.values()) {
  console.log(value);
}
console.log("=========================================================================")

//Get both key and value in map
for (entry of deck.entries()) {
  console.log(entry, entry[0], entry[1]);
}

//or you can use: Get both key and value in map
console.log("=========================================================================")
for (entry of deck) {
  console.log(entry);
  console.log(entry[0], entry[1]);
}
console.log(deck.clear())
console.log(deck);

console.log("=========================================================================")

console.log(typeof Map);
