var arr = [2, 4, 1, 6, 8, 5, 3, 7];

function merge(lArr, rArr, arr){
    var i=0;j=0;k=0;

    while(i<lArr.length && j<rArr.length){
        if(lArr[i] < rArr[j]){
            arr[k] = lArr[i];
            i++;
        }else{
            arr[k] = rArr[j];
            j++;
        }
        k++;
    }

    while(i< lArr.length){
        arr[k] = lArr[i];
        i++;
        k++;
    }

    while(j< rArr.length){
        arr[k] = rArr[j];
        j++;
        k++;
    }
    return arr;
}
function mergeSort(arr) {
  var l = arr.length;
  if (l < 2) return;

  var mid = l % 2 === 0 ? l / 2 : (l + 1) / 2;
  var lArr = [],
    rArr = [];

  for (var i = 0; i < mid; i++) {
    lArr.push(arr[i]);
  }

  for (var i = mid; i < l; i++) {
    rArr.push(arr[i]);
  }
  mergeSort(lArr);
  mergeSort(rArr);
  merge(lArr, rArr, arr);
  return arr;
}

var sorteArr = mergeSort(arr);
console.log(sorteArr);