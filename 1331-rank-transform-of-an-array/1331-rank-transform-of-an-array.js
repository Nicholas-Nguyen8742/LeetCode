/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
  const sorted = arr.toSorted((a, b) => a - b);

  const map = new Map();

  let rank = 1;
  let curr = 0;
  while (curr < sorted.length) {
    if (!map.has(sorted[curr])) {
      map.set(sorted[curr], rank);
      rank++;
    }
    curr++;
  }

  return arr.map((el) => map.get(el));
};