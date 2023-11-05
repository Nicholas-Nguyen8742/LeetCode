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
    let i = filter.length - 1, j = 0;
    while (i >= 0) {
        arr[filter[j][1]] = filter[i][0];
        i--;
        j++;
    }
    return arr.join('');
};