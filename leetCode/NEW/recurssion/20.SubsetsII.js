const getAllUniqueSubset = (arr, index, ds, result) => {
  if (index >= arr.length) {
    const findIndex = result.findIndex(ar => ar.join("-") === ds.join("-"));
    if (findIndex === -1) {
      result.push([...ds]);
    }

    return;
  }

  ds.push(arr[index]);
  getAllUniqueSubset(arr, index + 1, ds, result);
  ds.pop();
  getAllUniqueSubset(arr, index + 1, ds, result);
};

var subsetsWithDup = function (nums) {
  const result = [];

  nums.sort((a, b) => a-b);
  getAllUniqueSubset(nums, 0, [], result);

  return result;
};

console.log(subsetsWithDup([4,4,4,1,4]));
