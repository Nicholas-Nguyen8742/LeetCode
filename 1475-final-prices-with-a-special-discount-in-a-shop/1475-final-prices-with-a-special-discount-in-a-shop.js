/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
  let result = [...prices];
  let i = 0;
  while (i < result.length) {
    let temp = result[i];
    let j = 0;
    while (j < prices.length) {
      if (j <= i) {
        j++;
        continue;
      }
      
      if (prices[j] <= prices[i]) {
        result[i] = prices[i] - prices[j];
        break;
      }
      j++;
    }
    i++;
  }
  return result;
};