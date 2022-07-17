var minDeletions = function(s) {
    let arr = [];
    for(let i=0;i< s.length;i++){
        let key = s.charAt(i).charCodeAt(0) - 97;
        arr[key] = arr[key] ? arr[key]+1 : 1;
    }

    let set = new Set();
    let res = 0;
    for(let i=0; i<26 ;i++){
        let freq = arr[i];
        while(freq>0){
            if(!set.has(freq)){
                set.add(freq);
                break;
            }
            freq--;
            res++;
        }
    }
    return res;
};

console.log(minDeletions("aabbcc"));