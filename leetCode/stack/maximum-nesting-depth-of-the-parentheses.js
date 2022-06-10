var maxDepth = function (s) {
  var stack = [],
    max = 0,
    count = 0;
  for (var i = 0; i < s.length; i++) {
    if (s.charAt(i) == "(" || s.charAt(i) == ")") {
      if (s.charAt(i) == "(") {
        stack.push("(");
        count++;
      } else {
        stack.pop();
        count--;
      }
      max = max < count ? count : max;
    }
  }
  if (stack.length === 0) {
    return max;
  }
  return 0;
};

var x = maxDepth("(1)+((2))+((3)))");
console.log(x);
