Array.prototype.myForEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i], i, this);
    }
}

let arr = [1, 2, 3, 4, 5];
arr.myForEach((value, index, arr1)=>console.log(index,' th value is ', value, ' from this array ', arr1));
console.log(arr);

arr.myForEach((value, index, arr1) => {
    arr1[index] = value * 10;
});


console.log(arr);