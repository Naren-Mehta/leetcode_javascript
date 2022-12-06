var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  const hash1 = Array(26).fill(0);
  const hash2 = Array(26).fill(0);

  for (let i = 0; i < word1.length; i++) {
    const asci1 = word1[i].charCodeAt(0);
    const asci2 = word2[i].charCodeAt(0);

    hash1[asci1 - 97]++;
    hash2[asci2 - 97]++;
  }

  for (let i = 0; i < hash1.length; i++) {
    if (
      (hash1[i] === 0 && hash2[i] !== 0) ||
      (hash1[i] !== 0 && hash2[i] === 0)
    ) {
      return false;
    }
  }

  hash1.sort((a, b) => a - b);
  hash2.sort((a, b) => a - b);

  for (let i = 0; i < hash1.length; i++) {
    if (hash1[i] !== hash2[i]) {
      return false;
    }
  }

  return true;
};

console.log(closeStrings("uau", "ssx"));
