function subString(str){
   for(let i=0;i < (1 << str.length); i++){
    let sub = "";

    for(let j=0; j< str.length; j++){
        if((i & (1 << j)) != 0){
            sub += str[j];
        }
    }
    console.log(sub);
   }
}

subString("abcd");