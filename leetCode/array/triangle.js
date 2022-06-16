var minimumTotal = function(triangle) {
    let sum = 0;
    for(let i=0;i<triangle.length;i++){
        console.log(triangle[i]);
        triangle[i].sort((a,b)=> a-b);
        console.log(triangle[i]);
        sum += triangle[i][0];
    }
    return sum;
};

let x = minimumTotal([[-1],[2,3],[1,-1,-3]]);
console.log(x);