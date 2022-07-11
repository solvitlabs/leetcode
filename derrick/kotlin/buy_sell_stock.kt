class Solution {
    fun maxProfit(prices: IntArray): Int {
        // iterate the prices array
        // In each step:
            // compare and register the lowest price
            // compare and register max profit
        var lowestPrice = prices[0]
        var maxProfit = 0
        var currentProfit = 0
        for ((day, price) in prices.withIndex()) {
            if (day === 0) continue
            
            if (price < lowestPrice) 
                lowestPrice = price           
                       
            currentProfit = price - lowestPrice
            
            if (currentProfit > maxProfit) 
                maxProfit = currentProfit
           
        }
        
        return maxProfit
    }
}