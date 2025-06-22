/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
  const partitions = [];
  const length = s.length;

  let factors = Math.floor(length / k);
  let i = 0;
  while (factors) {
    partitions.push(s.substring(i, i + k));
    i += k;
    factors--;
  }

  const leftovers = length % k;
  if (leftovers) {
    const lastString = s.substring(length - leftovers, length);
    partitions.push(`${lastString}${fill.repeat(k - lastString.length)}`);
  }

  return partitions;
};