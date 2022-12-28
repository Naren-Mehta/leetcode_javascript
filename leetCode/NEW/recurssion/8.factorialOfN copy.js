function factorial(n, s){
    if(n === 1){
        return s;
    }

    return factorial(n-1, n*s);
}

const result = factorial(5, 1);

console.log(result);