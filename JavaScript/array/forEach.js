let numbers = [8, 7, 6, 5, 4];

// Print all elemnt from array
numbers.forEach(function (value, index, arr){
    console.log(value, index, arr);
});

// get sum of all emement from array
let sum =0;
numbers.forEach(function (value){
sum += value;
});
console.log('sum = ', sum);

// count later occurance
let characters = ['a', 'b', 'a', 'b', 'c','b', 'a', 'c' , 'b',  'a' ];
let map = {};
characters.forEach(value=>{
    if(map[value]){
        map[value] = map[value] + 1;
    }
    else{
        map[value] = 1;
    }
});
console.log(map);

// count later occurance: via reduce method
const countOccurance = characters.reduce((accumulator, value) => {
    if(accumulator[value]){
        accumulator[value] = accumulator[value] + 1;
    }
    else{
        accumulator[value] = 1;
    }
    return accumulator;
}, {})

console.log('count occurance via reduce ', countOccurance);


