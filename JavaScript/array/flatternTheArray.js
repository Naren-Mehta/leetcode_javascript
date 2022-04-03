let array = [1, [2, 3], [4, 5, 6, [7, 8, 9]]];

Array.prototype.myFill = function () {
  let newArr = [], counter =0;

    var newFun = function(arr){
      for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
           newArr.concat(newFun(arr[i]));
        } else {
          newArr.push(arr[i]);
        }
      }
      return newArr; 
    }
    
   return newFun(this);
};

var flatternArray = array.myFill();
flatternArray
