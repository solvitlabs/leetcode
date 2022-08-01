/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let lowestPrice = prices[0];
    let highestProfit = 0;
    let currentProfit;
    let currentPrice;
    
    for (let i=1; i < prices.length; i++) {
        currentPrice = prices[i];
        if (currentPrice <= lowestPrice) {
            lowestPrice = currentPrice;
        } else {
            currentProfit = currentPrice - lowestPrice;
            if (currentProfit > highestProfit) highestProfit = currentProfit;
        }
    }
    
    return highestProfit;   

    
};
