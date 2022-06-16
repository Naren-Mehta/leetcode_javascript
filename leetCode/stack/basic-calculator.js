var calculate = function (s) {
const operators ={
    "+": (a, b)=> a+b,
    "-": (a, b)=> a-b,
    "*": (a, b)=> a*b,
    "/": (a, b)=> a/b,

}
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let ch = s.charAt(i);
    if (ch == ")") {
      let str = "";
      while (stack.length > 0) {
        let value = stack.pop();
        if(value=='('){
            break;
        }
        str += value;
      }
    } else if (ch != " ") {
        if(operators[ch]){
            
        }else{
            stack.push(ch);
        }
    }
  }
  console.log(stack);

  while(stack.length>0){
    let ch = stack.pop();
    
  }
};

const result = calculate("1 + 1");
console.log(result);
