var hasAllCodes = function (s, k) {
  var need = 1 << k,
    obj = {};

  for (var i = k; i <= s.length; i++) {
    var a = s.substring(i - k, i);
    if (!obj[a]) {
      obj[a] = true;
      need--;
      if (need == 0) {
        return true;
      }
    }
  }
  return false;
};

console.log(hasAllCodes("0110", 2));
