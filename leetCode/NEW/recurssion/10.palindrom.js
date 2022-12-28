function palindrom(str, i){
    if(i >= str.length / 2){
        return true;
    }

    if(str[i] !== str[str.length -1 - i]){
        return false;
    }

    return palindrom(str, i+1);

}

const str = 'madamss';

const result = palindrom(str, 0);
console.log(result);