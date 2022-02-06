var arr, pointer;
var OrderedStream = function (n) {
    this.arr = new Array(n);
    this.index = 0;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
    this.arr[idKey - 1] = value;
    var tempArray = [];
    for (var i = this.index; i < this.arr.length; i++) {
        if(typeof this.arr[i] != 'undefined'){
            tempArray.push(this.arr[i]);
            this.index++;
        }else{
            break;
        }
    }
    return tempArray;
}

var obj = new OrderedStream(5);
var param_1 = obj.insert(3, "ccccc")
var param_2 = obj.insert(1, "aaaaa")
var param_3 = obj.insert(2, "bbbbb")
var param_4 = obj.insert(5, "eeeee")
var param_5 = obj.insert(4, "ddddd")

console.log(param_1, param_2, param_3, param_4, param_5);

// console.log(obj.insert(3, "ccccc")); // Inserts (3, "ccccc"), returns [].
// console.log(obj.insert(1, "aaaaa")); // Inserts (1, "aaaaa"), returns ["aaaaa"].
// console.log(obj.insert(2, "bbbbb")); // Inserts (2, "bbbbb"), returns ["bbbbb", "ccccc"].
// console.log(obj.insert(5, "eeeee")); // Inserts (5, "eeeee"), returns [].
// console.log(obj.insert(4, "ddddd")); // Inserts (4, "ddddd"), r