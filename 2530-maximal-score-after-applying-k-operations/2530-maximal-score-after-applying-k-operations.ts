function maxKelements(nums: number[], k: number): number {
  const maxHeap = new MaxPriorityQueue();

  for (const num of nums) {
    maxHeap.enqueue(num);
  }

  let score = 0;

  for (let i = 0; i < k; i++) {
    const maxVal = maxHeap.dequeue().element;

    score += maxVal;

    maxHeap.enqueue(convertElement(maxVal));
  }

  return score;  
};

function convertElement(value: number): number {
  return Math.ceil(value / 3);
};
