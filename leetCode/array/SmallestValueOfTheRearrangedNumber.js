var smallestNumber = function(num) {
var num1;
    if(num >= 0){
        num1 = num.toString().split('').sort((a,b) => a-b);
    }else{
        num1 = Math.abs(num).toString().split('').sort((a,b) => b-a);
    }
    
    if(num1[0] == 0){
        var i =0;
        while(num1[i] == 0){
            i++;
        }
    
        var temp = num1[i];
        num1[i] = num1[0];
        num1[0] = temp;
    }
    
    return num >= 0 ? parseInt(num1.join('')) : -parseInt(num1.join(''));
};

console.log(smallestNumber(-7605))