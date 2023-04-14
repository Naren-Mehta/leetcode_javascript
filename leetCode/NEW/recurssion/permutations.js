// https://leetcode.com/problems/permutations/description/

const getAllPermutaion = (arr, ds, result, freq) => {
  if (ds.length === arr.length) {
    result.push([...ds]);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (!freq[i]) {
      freq[i] = true;
      ds.push(arr[i]);
      getAllPermutaion(arr, ds, result, freq);
      ds.pop();
      freq[i] = false;
    }
  }
};

var permute = function (nums) {
  const result = [];
  getAllPermutaion(nums, [], result, []);

  return result;
};

console.log(permute([1, 2, 2]));
