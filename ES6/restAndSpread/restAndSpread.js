
function test(...rest){ // numbers to array
    console.log(rest)
}

test(10,20,30);

var numbers = [10,20,30,40];

console.log(...numbers); // Array to number