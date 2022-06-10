var maxDepth = function (s) {
  var max = 0,
    count = 0;
  for (var i = 0; i < s.length; i++) {
    if (s.charAt(i) == "(") {
      count++;
      max = Math.max(count, max);
    }
    if (s.charAt(i) == ")") {
      count--;
    }
  }

  return max;
};

var x = maxDepth("(1)+((2))+(((3))))");
console.log(x);
