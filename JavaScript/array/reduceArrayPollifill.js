let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];

Array.prototype.myReduce = function (cb, initialValue) {
    var accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
    }
    return accumulator;
};

let sumOfAllArryElements = arr1.myReduce((acc, current) => {
    return acc + current;
}, 0)

console.log(arr1);

console.log(sumOfAllArryElements);