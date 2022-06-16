 let arr =[];
    for(let i=0;i<triangle.length;i++){
        triangle[i].sort();
        arr.push(triangle[i][0]);
    }
    return arr;