var detectCapitalUse = function (word) {
  let capsCount = 0;
  let lowCount = 0;

  for (let ch of word) {
    const asciiCode = ch.charCodeAt();

    // console.log(asciiCode);
    if (asciiCode >= 65 && asciiCode <= 90) {
      capsCount++;
    } else if (asciiCode >= 97 && asciiCode <= 122) {
      lowCount++;
    }
  }

  if (
    capsCount === word.length ||
    lowCount === word.length ||
    (capsCount === 1 && word[0].charCodeAt() >= 65 && word[0].charCodeAt() <= 90)
  ) {
    return true;
  }

  return false;
};

console.log(detectCapitalUse("Google"));
