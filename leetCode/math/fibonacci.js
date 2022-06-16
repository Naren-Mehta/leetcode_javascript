function fibonacci(n, map){

    if(n==0 || n==1){
        return n;
    }

    if(map[n]){
        return map[n]
    }
    let v1= fibonacci(n-1, map);
    let v2 = fibonacci(n-2, map);
    let result = v1 +v2;
    map[n] = result;
    return result;
}

console.log(fibonacci(10, {}));