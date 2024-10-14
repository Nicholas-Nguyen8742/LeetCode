/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function(nums, k) {
  const maxHeap = createMaxHeapFromArray(nums);

  let score = 0;

  for (let i = 0; i < k; i++) {
    const maxVal = maxHeap.dequeue().element;

    score += maxVal;

    maxHeap.enqueue(convertElement(maxVal));
  }

  return score;
};

var convertElement = function(value) {
  return Math.ceil(value / 3);
};

var createMaxHeapFromArray = function(array) {
  const maxHeap = new MaxPriorityQueue();

  for (const element of array) {
    maxHeap.enqueue(element);
  }

  return maxHeap;
};
