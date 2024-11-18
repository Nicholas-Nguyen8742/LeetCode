function decrypt(code: number[], k: number): number[] {
  let result = [];
  const codeLength = code.length;

  if (k < 0) {
    code.reverse();
  }

  function nextK(curr) {
    let res = 0;
    const condition = Math.abs(k);
    for (let i = 0; i < condition; i++) {
      res += code[wrapIndex(k < 0 ? i - curr : i + curr, codeLength)]
    }
    return res;
  }

  for (let i = 0; i < code.length; i++) {
    if (k === 0) {
      result[i] = 0;
    } else {
      result[i] = nextK(k < 0 ? i : i + 1);
    }
  }
  return result;
};

var wrapIndex = function(index: number, arrayLength: number) {
  return ((index % arrayLength) + arrayLength) % arrayLength;
};
