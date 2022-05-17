//Curring in JS
//Question : Infinite Curring
// sum(1)(2)(3)(4)(5)(6)(7).......();

function sum(a){
    return function(b){
        if(b) return sum(a+b);
        return a;
    }
}

console.log(sum(1)(2)(3)(4)(5)(6)(7)());