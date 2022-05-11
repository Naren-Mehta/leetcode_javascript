//Important


function multiply(a, b, c, d){
    return a * b * c * d;
}


const arr = []; //1,2, 3, 4
const multiplyModified = function(...args){
    arr.push(...args);
    if(arr.length === 4){
        return multiply(...arr);
    }

    else{
        return function(...newArgs){
            return multiplyModified(...newArgs);
        }
    }
}

multiplyModified(1,2,3,4);
multiplyModified(1,2)(3,4);
multiplyModified(1)(2,3)(4);
multiplyModified(1)(2)(3)(4);