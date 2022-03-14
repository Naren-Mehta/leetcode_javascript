var b = {
  name: "jay",
  say() {
    console.log(this);
  },
};

var c = {
  name: "jay",
  say() {
    return function () {
      console.log(this);
    };
  },
  say1() {
    console.log(this);
  },
};

var d = {
  name: "jay",
  say() {
    return () => {
      console.log(this);
    };
  },
};

b.say();
c.say1();
c.say()();
d.say()();

// =============================================================================================

var name="Test";
const character = {
  name: "Simon",
  getCharacter: function() {
    return this.name;
  },
  getCharacter1: () => {
    return this.name;
  }
};

console.log('This will work as expected: ' , character.getCharacter());

const giveMeTheCharacterNOW = character.getCharacter;
console.log('but this will not work here: ? ' , giveMeTheCharacterNOW());

const giveMeTheCharacterNOW1 = character.getCharacter1;
console.log('1 but this will not work here: ? ' , giveMeTheCharacterNOW1());

// =================================================

const test = {
  prop: 42,
  func: function() {
    return this.prop;
  },
};

console.log(test.func());