var evalRPN = function (tokens) {
  let arr = [];

  for (let i = 0; i < tokens.length; i++) {
    if (!isNaN(tokens[i])) {
      arr.push(parseInt(tokens[i]));
    } else {
        let second = arr.pop();
        let first = arr.pop();
        let result = 0;
    
        switch (tokens[i]) {
          case "+":
            result =  first + second;
            break;
          case "-":
            result =  first - second;
            break;
          case "*":
            result = first * second;
            break;
          case "/":
            result = parseInt(first / second);
            break;
        }
    
        arr.push(result);
    }
  }

  return arr.pop();
};

const result = evalRPN(["4","13","5","/","+"]);
console.log(result);