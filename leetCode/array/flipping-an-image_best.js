var flipAndInvertImage = function(image) {
    return image.reduce((result, arr) => {
       result.push(arr.map(a => a^1).reverse())
       return result
    });
};

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]));