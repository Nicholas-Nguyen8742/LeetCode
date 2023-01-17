/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let array = [];
    let index = 1;
    while (index <= n) {
        let value = index.toString();
        let fizz = "";
        if (index % 3 === 0) fizz += "Fizz";
        if (index % 5 === 0) fizz += "Buzz";
        array.push(fizz !== "" ? fizz : value);
        ++index;
    };
    return array;
};