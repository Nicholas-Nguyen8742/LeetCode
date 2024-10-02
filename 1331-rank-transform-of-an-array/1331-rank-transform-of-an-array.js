/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
  const sorted = arr.toSorted((a, b) => a - b);

  const map = Object.create(null);

  let rank = 1;
  let curr = 0;
  while (curr < sorted.length) {
    if (!map[sorted[curr]]) {
      map[sorted[curr]] = rank;
      rank++;
    }
    curr++;
  }

  return arr.map((el) => map[el]);
};