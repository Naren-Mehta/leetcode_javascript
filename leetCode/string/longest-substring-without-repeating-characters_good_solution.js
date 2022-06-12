var lengthOfLongestSubstring = function (s) {
  let len = s.length;
  if (len == 0) {
    return 0;
  }

  let l = 0,
    r = 0;
  let map = new Map();
  let max = 0;
  while (r < len) {
    let char = s.charAt(r);

    if (map.get(char) >= 0) {
      l = Math.max(l, map.get(char) + 1);
    }

    map.set(char, r);
    max = Math.max(max, r - l + 1);
    console.log(char, map, max);
    r++;
  }

  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
