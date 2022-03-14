var sortSentence = function (s) {
    let str = [],
        strArr = s.split(" ");
    for (let i = 0; i < strArr.length; i++) {
        //let t = strArr[i][strArr[i].length-1]
        let index = strArr[i][strArr[i].length - 1];
        str[index - 1] = strArr[i].slice(0, strArr[i].length - 1);
    }

    return str.join(" ");
};

console.log(sortSentence('is2 sentence4 This1 a3'));