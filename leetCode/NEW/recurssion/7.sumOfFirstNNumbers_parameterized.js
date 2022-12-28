function sum(n, s){
    if(n === 0){
        return s;
    }

    return sum(n-1, s + n);
}

const result = sum(5, 0);
console.log(result);