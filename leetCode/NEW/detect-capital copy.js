var detectCapitalUse = function (word) {
  if(word === word.toUpperCase() || word === word.toLowerCase()){
    return true;
  }

  if(word[0] === word[0].toUpperCase()){
    let str = word.slice(1);

    if(str === str.toLowerCase()){
      return true;
    }
  }

  return false;
};

console.log(detectCapitalUse("GooglE"));
