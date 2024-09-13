/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  const map = {
    0: "qwertyuiop".split(''),
    1:"asdfghjkl".split(''),
    2: "zxcvbnm".split('')
  };
  
  return words.reduce((acc, curr, i) => {
    let rowCount = 0;
    for (const key in map) {
      if (rowCount === 2) {
        continue;
      }
      const arr = curr.toLowerCase().split('').map((el) => map[key].includes(el));
      if (arr.every((el) => el === true)) {
        rowCount += 1;
      }
    }
    if (rowCount === 1) {
      acc.push(curr);
    }
    return acc;
  }, []);
};