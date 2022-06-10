var lengthOfLongestSubstring = function (s) {
  let len = s.length;
  if (len == 0) {
    return 0;
  }
  if (len == 1) {
    return 1;
  }
  let max = 0;
  for (let i = 0; i < len - 1; i++) {
    let j = i + 1;
    let newStr = s.charAt(i);

    while (!newStr.includes(s.charAt(j)) && j < len) {
      newStr += s.charAt(j);
      j++;
    }
    max = Math.max(max, newStr.length);
  }

  return max;
};

console.log(lengthOfLongestSubstring(" "));
