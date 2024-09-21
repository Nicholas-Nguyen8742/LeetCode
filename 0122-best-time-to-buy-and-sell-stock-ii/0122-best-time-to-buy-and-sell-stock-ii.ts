function maxProfit(prices: number[]): number {
  let curr = -Infinity;
  let profit = 0;
  let i = 0;
  while (i < prices.length) {
    const prev = curr;
    const prevProfit = profit;
    curr = Math.max(prev, prevProfit - prices[i]);
    profit = Math.max(prevProfit, prev + prices[i]);
    i++;
  }

  return profit;
};