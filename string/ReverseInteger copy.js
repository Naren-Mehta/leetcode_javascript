var reverse = function (x) {

    var max_integer = Math.pow(2, 31);
    var sign = x < 0 ? -1 : 1;

    x = Math.abs(x).toString().split();
    x = sign * Number(x.reverse().join(''));

    return -max_integer <= x && x <= max_integer - 1 ? x : 0;
};

console.log(reverse(1534236469))