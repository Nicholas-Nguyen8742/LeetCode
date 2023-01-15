/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    };
    const len = s.length;
    let i = 0;
    let res = 0;
    while (i < len) {
        map[s.substr(i, 2)] 
            ? res += map[s.substr(i, 2)]
            : res += map[s[i]];
        map[s.substr(i, 2)] 
            ? i += 2
            : i += 1;
    }
    return res;

};