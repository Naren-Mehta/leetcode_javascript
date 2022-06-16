// function fibonacci(n, map){
//     if(n<2){
//         return n;
//     }

//     if(map[n]){
//         return map[n]
//     }
//     let v1= fibonacci(n-1, map);
//     let v2 = fibonacci(n-2, map);
//     let result = v1 +v2;
//     map[n] = result;
//     return result;
// }

// console.log("===",fibonacci(10, {}));


function fibonacciBestSolution(n){
   
    let prev2 = 0;
    let prev1 = 1;
    for(let i=2;i<=n;i++){
        let temp = prev1 + prev2;
        prev2 = prev1;
        prev1 = temp;
    }

    return prev1;
}

console.log(fibonacciBestSolution(10));