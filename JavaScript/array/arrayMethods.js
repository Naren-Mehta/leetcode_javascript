
//Concat method
// var arr1 = ['a', 'b', 'c'];
// var arr2 = ['c', 'd', 'e'];

// var arr3 = arr1.concat(arr2);
// console.log(arr3);


//Flat method
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
console.log(arr2.flat(3));
