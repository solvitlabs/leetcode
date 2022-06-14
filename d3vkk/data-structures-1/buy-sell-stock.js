/**
 * @param {0[]} prices
 * @return {0}
 */
function maxProfit(prices) {
  const origPrices = [...prices];
  var pricesSorted = prices.sort((a, b) => a - b);

  var minPrice = pricesSorted[0];
  const minPriceIndex = origPrices.indexOf(minPrice);

  if (minPriceIndex == origPrices.length - 1) {
    origPrices.splice(minPriceIndex, 1);
    maxProfit(origPrices);
  }

  const restOfPrices = origPrices.slice(minPriceIndex + 1);
  var maxPriceFromRest = Math.max(...restOfPrices);

  const profit = maxPriceFromRest - minPrice;
  return profit;
}

// console.log("maxProfit", maxProfit([7, 1, 5, 3, 6, 4]));
// console.log("maxProfit", maxProfit([7, 6, 4, 3, 1]));
// console.log("maxProfit", maxProfit([7, 2, 5, 3, 6, 4, 1]));
maxProfit([7, 2, 5, 3, 6, 4, 1]);
