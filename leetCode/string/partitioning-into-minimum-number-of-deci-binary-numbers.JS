var minPartitions = function(n) {
    let arr = n.split("");
    return Math.max(...arr);
};

console.log(minPartitions("82734"));