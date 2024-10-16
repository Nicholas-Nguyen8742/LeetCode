/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
  let currA = 0, currB = 0, currC = 0;
  let result = '';
  const totalCount = a + b + c;
  for (let i = 0; i < totalCount; i++) {
    if ((a >= b && a >= c && currA != 2) || (a > 0 && (currB == 2 || currC == 2))) {
      result += 'a';
      a -= 1;
      currA++;
      currB = 0;
      currC = 0;
    } else if ((b >= a && b >= c && currB != 2) || (b > 0 && (currC == 2 || currA == 2))) {
      result += 'b';
      b--;
      currB += 1;
      currA = 0;
      currC = 0;
    } else if ((c >= a && c >= b && currC != 2) || (c > 0 && (currA == 2 || currB == 2))) {
      result += "c"
      c -= 1
      currC += 1
      currA = 0
      currB = 0
    }
  }
  return result;
};