var removeDuplicates = function (s) {
 
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if(stack.length === 0){
      stack.push(s[i]);
    }else{
      let lastVal = stack[stack.length -1];
      if(lastVal === s[i]){
        stack.pop();
      }else{
        stack.push(s[i]);
      }
    }
  }

  return stack.join("");
};

console.log(removeDuplicates("azxxzy"));
