var calPoints = function (operations) {
  let arr = [];
  operations.forEach((op) => {
    if (op === "C") {
      arr.pop();
    } else if (op === "D") {
      let mult = arr[arr.length -1 ] * 2;
      arr.push(mult);
    } else if (op === "+") {
      let num1 = arr.pop();
      let num2 = arr.pop();
      let sum = num1 + num2;
      arr.push(num2, num1, sum);
    } else {
      arr.push(parseInt(op));
    }
  });

  if (arr.length === 0) return 0
  let sum = arr.reduce((a, b) => a + b);
  return sum;
};

const arr = ["5","2","C","D","+"]
const result = calPoints(arr);
console.log(result);
