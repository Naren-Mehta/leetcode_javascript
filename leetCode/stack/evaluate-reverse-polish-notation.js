var evalRPN = function (tokens) {
  let stack = [];
  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => parseInt(a / b),
  };

  for (let i = 0; i < tokens.length; i++) {
    let char = tokens[i];
    if (operators[char] != undefined) {
      let operend1 = stack.pop();
      let operend2 = stack.pop();
      stack.push(operators[char](operend2, operend1));
    } else {
      stack.push(parseInt(char));
    }
  }
  return stack.pop();
};

const result = evalRPN(["2", "1", "+", "3", "*"]);
console.log(result);
