
const person = {
    firstName: 'John',
    lastName: 'Doe'
};


// for(const key of Object.keys(person)){
//     console.log(key, person[key])
// }

// for(const value of Object.values(person)){
//     console.log(value)
// }

// for(const key in person){
//     console.log("====", key, person[key]);
// }
// //Check this
// for(const entry of Object.entries(person)){
//         console.log(entry)
// }

// const entries = Object.entries(person);
// console.log(entries)


const arr= Object.keys(person).map(key => [key, person[key]]);
console.log(arr);