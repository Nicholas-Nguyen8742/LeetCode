function maxProfit(prices: number[]): number {
  const result = prices.reduce((acc, price, i) => {
    const [prev, prevProfit] = [acc[0], acc[1]];
    acc[0] = Math.max(prev, prevProfit - price);
    acc[1] = Math.max(prevProfit, prev + price);
    return acc;
  }, [-Infinity, 0]);
  
  return result[1];
};