const radius = [3, 1, 2, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

//this calculateFormula is Higher Order Function, it has function as a argument
Array.prototype.calculateFormula = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

console.log(radius.map(area)); // this also do the same thing
console.log(radius.calculateFormula(area));
console.log(radius.calculateFormula(circumference));
console.log(radius.calculateFormula(diameter));
