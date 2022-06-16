function removeOutermostParentheses(str) {
  let count = 0,
    newStr = "";
  for (let i = 0; i < str.length; i++) {
    const ch = str.charAt(i);
    if (ch == "(" && count++ > 0) {
        newStr += ch;
    }

    if (ch == ")" && count-- > 1) {
        newStr += ch;
    }
  }
  return newStr;
}

const result = removeOutermostParentheses("(()())(())");
console.log(result);