var isPowerOfTwo = function(n) {
    
    if(n === 0){
        return false;
    }

    if(n === 1){
        return true;
    }

    if(n % 2 === 1){
        return false;
    }

    return isPowerOfTwo(n/2);
};

const result = isPowerOfTwo(0);
console.log(result);