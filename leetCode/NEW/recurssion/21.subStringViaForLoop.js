function subString(str){
    for(let len=1; len<=str.length; len++){
        for(let i=0; i<=str.length-len; i++){
            let j = i + len -1;
            let s="";
            for(let k = i; k <=j; k++){
                s+= str[k];
            }

            console.log(s);
        }
    }
}

subString("abcd");