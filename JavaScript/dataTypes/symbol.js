// Here are two symbols with the same description:
let Sym1 = Symbol("Sym")
let Sym2 = Symbol("Sym")

console.log(Sym1, Sym2);

console.log(Sym1 == Sym2);
console.log(Sym1 === Sym2);

console.log(Sym1);

// alert(Sym1)  // TypeError: Cannot convert a Symbol value to a string
// alert(Sym1.toString())  // Symbol(Sym), now it works


let _Sym = Symbol("Sym");

// alert(_Sym.description); // Sym

console.log('check1 ', Symbol.for("tokenString"));
console.log('check2 ', Symbol.keyFor(Symbol.for("tokenString")));
var test = Symbol.for("tokenString");
console.log('check3 ', Symbol.keyFor(test));

console.log(Symbol.keyFor(Symbol.for("tokenString")) === "tokenString") //true