/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    const map = new Map();
    heights.map((el, index) => map.set(el, names[index]));
    return heights.sort((a, b) => b - a).map((el) => map.get(el));
};