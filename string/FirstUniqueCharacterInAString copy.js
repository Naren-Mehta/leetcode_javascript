var firstUniqChar = function(s) {
    
    // First attempt
    for (let i = 0; i < s.length; i++) {
        console.log(s.slice(0,i), s[i])
        if (!s.slice(0,i).includes(s[i]) && !s.slice(i+1).includes(s[i])) return i;  
      }
      return -1;
};

console.log(firstUniqChar('aabb'));