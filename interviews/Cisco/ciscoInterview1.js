// question1: 

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/


var maxProfit = function(prices) {
    let max=0;
    let min =prices[0];
    for(var i =1;i< prices.length;i++){
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i]-min);
    }
    return max;
};


let result = maxProfit([7,1,5,3,6,4]);
console.log(result);






