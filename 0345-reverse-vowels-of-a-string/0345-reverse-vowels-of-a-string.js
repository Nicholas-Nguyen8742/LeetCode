/**
 * @param {string} s
 * @return {string}
 */
var isMatch = function(el, i) {
  const regex = /[aeiou]/gi;
  return el.match(regex) ? [el, i] : el;
}

var isArray = function(el) {
  return Array.isArray(el);
}

var reverseVowels = function(s) {
    const arr = s.split('').map(isMatch);
    const filter = arr.filter(isArray).reverse();
    let j = 0;
    for (let i = filter.length - 1; i >= 0; i--) {
      arr[filter[j][1]] = filter[i][0];
      j++;
    }
  return arr.join('');
};