/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
  const isAlphabetic = /^[a-zA-Z]+$/;
  const letters = [];
  
  return s.split('').reduce((acc, curr, i) => {
    if (isAlphabetic.test(curr)) {
      letters.unshift(curr);
      acc.push(null);
    } else {
      acc.push(curr);
    }
    if (s.length - 1 === i) {
      return acc.map((el) => {
        if (el == null) {
          return letters.splice(0, 1)[0];
        } else {
          return el;
        }
      }).join('');
    }
    return acc;
  }, []);
};