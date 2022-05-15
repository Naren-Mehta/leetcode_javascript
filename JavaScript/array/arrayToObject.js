
// convert arry to object
// Array ['a','b','c'] 
// to Object (like below)
// {
// 	0: 'a',
// 	1: 'b',
// 	2: 'c'
// }

const arrayToObject = ['a','b','c'].reduce((acc, current, index) =>{
    acc[index] = current;
    return acc;
}, {});

console.log("arrayToObject ",arrayToObject)


var x =  ['a','b','c'];
console.log({...x});

const obj = Object.assign({}, x);

console.log(obj);
