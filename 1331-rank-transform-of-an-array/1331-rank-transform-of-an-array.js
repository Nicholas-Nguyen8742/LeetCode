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
    const element = sorted[curr];
    if (!map[element]) {
      map[element] = rank;
      rank++;
    }
    curr++;
  }

  return arr.map((el) => map[el]);
};