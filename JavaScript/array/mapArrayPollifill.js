let arr = [1, 2, 3, 4, 5, 6];

Array.prototype.myMap = function (cb) {
    var newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(cb(this[i], i, this));
    }
    return newArr;
}
console.log(arr);
let arrPlus2 = arr.myMap(m => m + 2);
console.log(arrPlus2);

let arrPlus3 = arr.map(m => m + 3);
console.log(arrPlus3);