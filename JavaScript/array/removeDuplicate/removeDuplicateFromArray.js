// Remove duplicate from array

const arr = [1, 1, 1, 2, 3, 4, 4, 4, 7, 7, 7, 7, 7, 7];

// Solution 1: ========================================================
const removeDuplicate1 = function (arr) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[i] = true;
    }
  }

  console.log(map);

  return Object.keys(map);
};

// console.log(removeDuplicate1(arr)); // but this will return in String

// Solution 2: ========================================================
// console.log([...new Set(arr)]); // Set introduced in ES6

// Solution 3: ========================================================
const newArr = arr.filter((ele, index) => {
  return arr.indexOf(ele) === index;
});

// console.log(newArr);

// Solution 4: ========================================================

const newArr1 = [];
arr.forEach((ele) => {
  if (!newArr1.includes(ele)) {
    newArr1.push(ele);
  }
});

console.log(newArr1);
