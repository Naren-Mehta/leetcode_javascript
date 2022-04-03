// Array.prototype.myFilter = function (cb) {
//     let arr = [];
//     for (let i = 0; i < this.length; i++) {
//         if (cb(this[i], i, this)) {
//             arr.push(this[i]);
//         }
//     }
//     return arr;
// }

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// let arr2 = arr1.filter(i => i > 5);
// console.log(arr2);

// let arr3 = arr1.myFilter(i => i <= 5);
// console.log(arr3);


// Pollyfill=====================================================================
var arr = [1, 2, 4, 8,10, 12];

Array.prototype.myFilter = function (callback){
    let result = [];
    for(let index = 0; index< this.length; index++) {
      if (callback(this[index], index, this)) {
        result.push(this[index]);
      }
    }
    return result;
  }
  
  let result = arr.myFilter((item, index, arrayObj)=>{
    return item > 8;
  })
  console.log(result);