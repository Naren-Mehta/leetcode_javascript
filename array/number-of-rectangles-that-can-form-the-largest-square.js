var countGoodRectangles = function(rectangles) {
    const obj ={};
    for(var i=0;i< rectangles.length;i++){
        let min = Math.min(rectangles[i][0] , rectangles[i][1])
        if(obj[min]){
            obj[min] +=1;
        }else{
            obj[min] = 1;
        }
    }
    return obj[Math.max(...Object.keys(obj))];
};


console.log(countGoodRectangles([[5,8],[3,9],[5,12],[16,5]]));