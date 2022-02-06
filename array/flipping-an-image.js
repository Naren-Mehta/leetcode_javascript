var flipAndInvertImage = function(image) {
    for(var i=0; i< image.length ; i++){
        image[i].reverse();
        for(var j=0; j<image[i].length ; j++ ){
            image[i][j] = image[i][j] === 0 ? 1 : 0;
        }
    }

    console.log(image);
};

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]));