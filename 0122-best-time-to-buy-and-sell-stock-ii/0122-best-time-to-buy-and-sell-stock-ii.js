/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let [curr, profit] = [-Infinity, 0];
  for (let i = 0; i < prices.length; i++) {
    const [prev, prevProfit] = [curr, profit];
    curr = Math.max(prev, prevProfit - prices[i]);
    profit = Math.max(prevProfit, prev + prices[i])
  }

  return profit;
};