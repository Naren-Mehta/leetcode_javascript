// Curring in JS

/* Question:

evaluate("sum")(4)(2); //6
evaluate("multiply")(4)(2); //8 
evaluate("divide")(4)(2); //2
evaluate("substract")(4)(2); //2 */



function evaluate(value){
    return function(a){
        return function(b){
            if(value === 'sum'){
                return a+b;
            }else if(value === 'multiply'){
                return a*b;
            }else if(value === 'divide'){
                return a/b;
            }else if(value === 'substract'){
                return a-b;
            }
        }   
    }
}


// we can use like currying 
const sum = evaluate("sum");
console.log(sum(4)(3));

// Other ways to use currying
console.log(evaluate("sum")(4)(2));
console.log(evaluate("multiply")(4)(2));
console.log(evaluate("divide")(4)(2)); 
console.log(evaluate("substract")(4)(2));