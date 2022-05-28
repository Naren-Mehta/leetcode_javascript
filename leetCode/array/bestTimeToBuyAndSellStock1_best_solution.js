
var maxProfit = function(prices) {
    var res =0;
   for(var i=1;i < prices.length; i++){
       res+= Math.max(0, prices[i]- prices[i-1]);
   }
   return res;
};


var profit = maxProfit([7,1,5,3,6,4]);
console.log(profit);