// https://leetcode.com/problems/permutations/description/

const swap = (arr, i, j) =>{
  const temp = arr[i];
  arr[i]= arr[j];
  arr[j] = temp;
}

const getAllPermutaion = (arr, index, result, freq) => {
  if (index >= arr.length) {
    result.push([...arr]);
    return;
  }
  
  for (let i = index; i < arr.length; i++) {
    swap(arr, i, index);
    getAllPermutaion(arr, index+1, result, freq);
    swap(arr, i, index);
  }
};

var permute = function (nums) {
  const result = [];
  getAllPermutaion(nums, 0, result, []);

  return result;
};

console.log(permute([1, 2, 3]));
