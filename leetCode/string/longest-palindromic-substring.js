const isPolindrome = function (s) {
  const mid = s.length % 2 == 0 ? s.length / 2 : (s.length + 1) / 2;
  for (let i = 0; i < mid; i++) {
    if (s.charAt(i) !== s.charAt(s.length - 1 - i)) {
      return false;
    }
  }
  return true;
};
var longestPalindrome = function (s) {
  var longestPoliStr = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let subStr = s.substring(i, j + 1);
      if (isPolindrome(subStr) && longestPoliStr.length < subStr.length) {
        longestPoliStr = subStr;
      }
    }
  }

  return longestPoliStr;
};

console.log("=max=", longestPalindrome("cbbd"));
