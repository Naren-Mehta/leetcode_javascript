// Curring in JS
// Question 6 -  curry() implementation
// Convert f(a,b, c) into f(a)(b)(c);
// interview question

function curry(func){
    return function curriedFun(...args){

        // console.log(args.length, func.length)
        if(args.length >= func.length){
            return func(...args);
        }else{
            return function(...next){
                return curriedFun(...args, ...next);
            }
        }
    }
}

const sum =(a, b, c, d) => a+b+c+d;

const totalSum = curry(sum);

console.log(totalSum(1)(2)(3)(4));