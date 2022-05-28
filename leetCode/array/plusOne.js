


var plusOne = function(digits) {
    var puluOneTest = function (digits, index){
        if(index >=0){
            var lastValue = digits[index] + 1;
            if(lastValue == 10){
                digits[index] = 0;
                digits = puluOneTest(digits, index-1)
            }else{
                digits[index] = lastValue;
            }
            return digits;
        }else{
            var arr = [1];
            for(var i=0;i<digits.length;i++){
                arr.push(digits[i]);
            }
            return arr;
        }
    }
    
    return puluOneTest(digits, digits.length -1);
};

console.log(plusOne([9,9]));