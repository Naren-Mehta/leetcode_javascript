var subsets = function (nums) {
  const result = [];
  getAllSubSet(nums, 0, [], result);
  return result;
};

const getAllSubSet = (arr, index, ds, result) =>{
    if(index >= arr.length){
        result.push([...ds]);
        return;
    }

    ds.push(arr[index]);
    getAllSubSet(arr, index+1, ds, result);
    ds.pop();
    getAllSubSet(arr, index+1, ds, result);
}

console.log(subsets([1,2,3]));