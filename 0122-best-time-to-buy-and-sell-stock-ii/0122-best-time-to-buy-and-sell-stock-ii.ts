function maxProfit(prices: number[]): number {
  let [curr, profit] = [-Infinity, 0];
  prices.forEach((price) => {
    const [prev, prevProfit] = [curr, profit];
    curr = Math.max(prev, prevProfit - price);
    profit = Math.max(prevProfit, prev + price);
  })

  return profit;
};