/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  return prices.reduce((acc, price, i) => {
    const [prev, prevProfit] = [acc[0], acc[1]];
    acc[0] = Math.max(prev, prevProfit - price);
    acc[1] = Math.max(prevProfit, prev + price);
    
    if (i === prices.length - 1) {
      return acc[1];
    }
    return acc;
  }, [-Infinity, 0]);
};