Array.prototype.myFilter = function (cb) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            arr.push(this[i]);
        }
    }
    return arr;
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let arr2 = arr1.filter(i => i > 5);
console.log(arr2);

let arr3 = arr1.myFilter(i => i <= 5);
console.log(arr3);