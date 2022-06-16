function isOperand(ch) {
  if (ch >= "0" && ch <= "9") return true;
  if (ch >= "a" && ch <= "z") return true;
  if (ch >= "A" && ch <= "Z") return true;
  return false;
}

function isOperator(ch) {
  if (ch == "+" || ch == "-" || ch == "*" || ch == "/") {
    return true;
  }
  return false;
}

function getOperatorWeight(ch) {
  if (ch == "+" || ch == "-") {
    return 1;
  } else if (ch == "*" || ch == "/") {
    return 2;
  }

  return -1;
}
function hasHigherPrecedence(ch1, ch2) {
  let weight1 = getOperatorWeight(ch1);
  let weight2 = getOperatorWeight(ch2);
  return weight1 > weight2 ? true : false;
}

function convertInfixToPostFix(s) {
  let stack = [];
  let postfix = "";
  for (let i = 0; i < s.length; i++) {
    var char = s.charAt(i);

    if (char == " " || char == ",") continue;

    if (isOperator(char)) {
      let top = stack[stack.length - 1];

      while (stack.length > 0 && top != "(" && hasHigherPrecedence(top, char)) {
        postfix += stack.pop();
      }
      stack.push(char);
    } else if (isOperand(char)) {
      postfix += char;
    } else if (char == "(") {
      stack.push(char);
    }else if(char == ')'){
      while (stack.length > 0 && top != "(") {
        postfix += stack.pop();
      }
      stack.pop();
    }
  }

  while (stack.length > 0) {
    postfix += stack.pop();
  }
  return postfix;
}

console.log(convertInfixToPostFix("a+b*c-d*e"));
