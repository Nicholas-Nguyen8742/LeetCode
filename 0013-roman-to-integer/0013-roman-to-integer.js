/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = new Map([['I', 1],['IV', 4],['V', 5],['IX', 9],['X', 10],['XL', 40],['L', 50],['XC', 90],['C', 100],['CD', 400],['D', 500],['CM', 900],['M', 1000]]);

    let count = 0;
    let index = 0;
    while (index < s.length) {
      if (map.has(s.substr(index, 2))) {
        count += map.get(s.substr(index, 2));
        index += 2;
      } else {
       count += map.get(s[index]);
       index += 1;
      }      
    }
    return count;

};