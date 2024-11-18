/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
  let result = [];
  const codeLength = code.length;

  if (k < 0) {
    code.reverse();
  }

  function nextK(index) {
    let res = 0;
    if (k === 0) return 0;

    const condition = Math.abs(k);
    let curr = k < 0 ? index : index + 1;
    for (let i = 0; i < condition; i++) {
      res += code[wrapIndex(k < 0 ? i - curr : i + curr, codeLength)]
    }
    return res;
  }

  for (let i = 0; i < codeLength; i++) {
    result[i] = nextK(i);
  }
  return result;
};

var wrapIndex = function(index, arrayLength) {
  return ((index % arrayLength) + arrayLength) % arrayLength;
};
