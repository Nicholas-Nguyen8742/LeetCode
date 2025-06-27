/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
  const result = new Array(spells.length).fill(0);

  const arr = [];
  for (const potion of potions) {
    arr.push(Math.ceil(success / potion));
  }

  arr.sort((a, b) => a - b);

  for (let i = 0; i < spells.length; i++) {
    let l = 0, r = arr.length - 1, successful = 0;
    while (l <= r) {
      const m = Math.floor((l+r) / 2);
      if (arr[m] <= spells[i]) {
        l = m + 1;
        successful = l;
      } else {
        r = m - 1;
      }
    }

    result[i] = successful;
  }

  return result;
};