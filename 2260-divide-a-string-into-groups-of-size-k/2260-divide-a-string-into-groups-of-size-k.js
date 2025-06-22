/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
  const partitions = [];
  let curr = '';

  for (let i = 0; i < s.length; i++) {
    if (curr.length && curr.length % k === 0) {
      partitions.push(curr);
      curr = s[i];
    } else {
      curr += s[i];
    }
  }

  while (curr.length % k !== 0) {
    curr += fill;
  }
  
  if (curr.length) {
    partitions.push(curr);
  }

  return partitions;
};