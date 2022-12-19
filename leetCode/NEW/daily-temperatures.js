var dailyTemperatures = function(temperatures) {
    let results = [];
    for(let i=0;i <temperatures.length;i++){
        let count = 0;
        let j = i+1;
        let isWarmTempFound = false;
        while(j < temperatures.length){
            if(temperatures[j] > temperatures[i]){
                count++;
                isWarmTempFound = true;
                break;
            }
            count++;
            j++;
        }

        results.push(isWarmTempFound ? count : 0);
    }

    return results;
};

const result = dailyTemperatures([30,60,90]);
console.log(result);