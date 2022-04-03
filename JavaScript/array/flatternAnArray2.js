let array = [1, [2, 3], [4, 5, 6, [7, 8, 9]]];


var flattern = function(arr){
    return arr.reduce((accumulator, currentValue) => accumulator.concat(Array.isArray(currentValue) ? flattern(currentValue) : currentValue), []);
}

console.log(flattern(array));


//=========================================================

const arr1 = [1, 2, [3, 4]];
console.log(arr1.flat()); // [1,2,3,4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat()); // [1,2,3,4, [5, 6]];


const arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat(2)); // [1,2,3,4,5, 6];

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr4.flat(Infinity)); // [1,2,3,4,5,6,7,8,9,10]
