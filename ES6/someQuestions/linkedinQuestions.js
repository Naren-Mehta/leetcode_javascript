// Example1:

let r =10;
let a=0;

while(r<13 || a<=2){
    r++;
    a += 2;
}

console.log(r, a);

//Example2: while below console.log will print false.

const obj1 = {x:1};
const obj2 = {x:1};

console.log(obj1 === obj2);
console.log(obj1.x === obj2.x);
console.log(obj1['x'] === obj2['x']);
console.log(obj1 != obj2);


//Example2:
var x =1000;
function f1(){
    console.log(x, y);
}

function f2(){
    var x = 10;
    var y =20;
    f1();
}

f2();
