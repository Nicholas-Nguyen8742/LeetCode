/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let left = 0;
  let right = 1;
  let maxProfit = 0;
  while (right < prices.length) {
      const pLeft = prices[left];
      const pRight = prices[right];
      if (pLeft < pRight) {
        maxProfit = Math.max(maxProfit, pRight - pLeft);
      } else {
        left = right;
      }
      right++;
    }
  return maxProfit;
};