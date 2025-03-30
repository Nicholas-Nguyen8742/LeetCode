/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
  const partitionSizes = [];
  let lastOccurrence = new Array(26).fill(0);
  let firstOccurrence = new Array(26).fill(-1);

  let partitionStart = 0, partitionEnd = 0;

  for (let i = 0; i < s.length; i++) {
    lastOccurrence[s.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
  }

  for (let i = 0; i < s.length; i++) {
    let index = s.charCodeAt(i) - 'a'.charCodeAt(0);

    if (firstOccurrence[index] === -1) {
      firstOccurrence[index] = i;
    }

    if (partitionEnd < firstOccurrence[index]) {
      partitionSizes.push(partitionEnd - partitionStart + 1);
      partitionStart = i;
      partitionEnd = i;
    }

    partitionEnd = Math.max(partitionEnd, lastOccurrence[index]);
  }

  if (partitionEnd - partitionStart + 1 > 0) {
    partitionSizes.push(partitionEnd - partitionStart + 1);
  }

  return partitionSizes;
};