var lengthOfLongestSubstring = function (s) {
  let len = s.length;
  if (len == 0) {
    return 0;
  }

  let l = 0,
    r = 0;
  let set = new Set();
  let max = 0;
  while (r < len) {
    let char = s.charAt(r);

    if (set.has(char)) {
      set.delete(s.charAt(l));
      l++;
    } else {
      max = Math.max(max, r - l + 1);
      set.add(char);
      r++;
    }
    console.log(char, set, max);
  }

  return max;
};

console.log(lengthOfLongestSubstring("abcaabcdeaba"));
