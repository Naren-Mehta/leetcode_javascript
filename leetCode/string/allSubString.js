function subStrings(s){
    for(let i=0;i< s.length;i++){
        for(let j=i;j< s.length;j++){
            console.log(i, j+1,"=="+s.substring(i,j+1));
        }
    }
}

subStrings("babad");