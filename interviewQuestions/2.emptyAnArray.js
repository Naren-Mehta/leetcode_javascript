// How to empty an Array in JavaScript?

var arr = [1, 2, 3, 4];
console.log(arr);


// 1st way
// arr = [];
// console.log('Make array Empty via arr=[] ', arr);


// 2nd way
// arr.length = 0;
// console.log('Make array Empty via arr.length = 0 ',arr);


// 3rd way
// arr.splice(0, arr.length);
// console.log('Make array Empty via splice method ', arr);

// 4rd way
while(arr.length){
    arr.pop();
}
console.log('Make array Empty via pop method ', arr);






