const getAllUniqueSubset = (arr, index, ds, result) => {

  result.push([...ds]);

  for(let i=index; i< arr.length; i++){
    if(i!= index && arr[i] === arr[i-1]){
      continue;
    }

    ds.push(arr[i]);
    getAllUniqueSubset(arr, i+1, ds, result);
    ds.pop();
  }
};

var subsetsWithDup = function (nums) {
  const result = [];
  nums.sort((a, b) => a-b);
  getAllUniqueSubset(nums, 0, [], result);
  return result;
};

console.log(subsetsWithDup([4,4,4,1,4]));
