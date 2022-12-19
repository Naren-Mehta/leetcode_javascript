var dailyTemperatures = function (temperatures) {
  let results = new Array(temperatures.length).fill(0);
  let stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    while(stack && temperatures[i] > temperatures[stack[stack.length -1]]){
        let idx = stack.pop();
        results[idx] = i-idx;
    }
    stack.push(i);
  }

  return results;
};

const result = dailyTemperatures([30,40,50,60]);
console.log(result);
