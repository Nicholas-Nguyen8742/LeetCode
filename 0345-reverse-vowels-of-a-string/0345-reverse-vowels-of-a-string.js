/**
 * @param {string} s
 * @return {string}
 */
var isMatch = function(el, i) {
  const regex = /[aeiou]/gi;
  return el.match(regex) ? [el, i] : el;
};

var isArray = function(el) {
  return Array.isArray(el);
};

var stringToMatchArr = function(string) {
    return string.split('').map(isMatch);
}

var filterArrReverse = function(arr) {
    return arr.filter(isArray).reverse();
};

var reverseVowels = function(s) {
    const arr = stringToMatchArr(s);
    const filter = filterArrReverse(arr);
    for (let i = filter.length - 1, j = 0; i >= 0; i--, j++)  arr[filter[j][1]] = filter[i][0];
    return arr.join('');
};