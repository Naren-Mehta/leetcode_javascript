var removeOuterParentheses = function(s) {
    let count =0, stack =[];

    for(let i =0;i<s.length;i++){
        let current = s.charAt(i);
        if(current === '(' && count++ >0){
            stack.push(current);
        }

        if(current === ')' && count-- >1){
            stack.push(current);
        }
    }
    return stack.join("");
};

console.log(removeOuterParentheses('(()())(())'));