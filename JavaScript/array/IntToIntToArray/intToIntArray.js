
// 
const number = 456789;
const stringArr = String(number).split("");
console.log(stringArr);
const intArr = stringArr.map((num) => Number(num));
console.log(intArr);