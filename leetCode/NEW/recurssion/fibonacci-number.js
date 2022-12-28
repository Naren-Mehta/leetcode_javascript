const getFib = (n, obj) => {

    if(obj[n] !== undefined){
        return obj[n];
    }

    const n1 = getFib(n-1, obj);
    obj[n-1] = n1;

    const n2 = getFib(n-2, obj);
    obj[n-2] = n2;

    obj[n] = n1 + n2;

    return obj[n];
}
var fib = function(n) {
    const obj = {
        '0': 0,
        '1': 1
    };

    return getFib(n, obj);
};

const result = fib(2);
console.log(result);