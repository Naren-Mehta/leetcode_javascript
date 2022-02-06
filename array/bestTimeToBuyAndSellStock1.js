
var maxProfit = function(prices) {
    var profit = 0,
        i = 0;
    while (i < prices.length - 1) {
        if (prices[i] < prices[i + 1]) {
            var j = i + 1;
            while (prices[j] < prices[j + 1]) {
                j++;
            }
            profit = profit + prices[j] - prices[i];
            i = j + 1;
        } else {
            i++;
        }
    }
    return profit;
};


var profit = maxProfit([7,1,5,3,6,4]);
console.log(profit);