/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const map = [...arr1, ...arr2].reduce((acc, curr) => {
        acc[curr.id] = { ...acc[curr.id] || {}, ...curr };
        return acc;
    }, {})
    return [...Object.values(map)].sort((a, b) => a.id - b.id);
};