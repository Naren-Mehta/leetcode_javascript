var reverse = function(x) {
    var y;
    if(x>=0){
        y = parseInt(x.toString().split('').reverse().join(''));
    }else{
        y = parseInt(Math.abs(x).toString().split('').reverse().join(''));
    }

    return y > 0x7FFFFFFF ? 0 : (x>=0 ? y : -y);
};

console.log(reverse(1534236469))