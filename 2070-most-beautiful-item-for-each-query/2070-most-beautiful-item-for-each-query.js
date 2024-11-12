/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function(items, queries) {
  const result = new Array(queries.length).fill(0);
  items.sort((a, b) => a[0] - b[0]);

  const maxBeauties = new Array(items.length).fill();
  for (let i = 0; i < items.length; i++) {
    maxBeauties[i] = Math.max(items[i][1], maxBeauties[i - 1] ?? 0);
  }

  for (let i = 0; i < queries.length; i++) {
    const idx = binarySearch(items, queries[i]);
    if (idx !== null) result[i] = maxBeauties[idx];
  }

  return result;
};

var binarySearch = function(items, query) {
  let low = 0;
  let high = items.length - 1;
  let idx = null;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (items[mid][0] <= query) {
      idx = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return idx;
};
