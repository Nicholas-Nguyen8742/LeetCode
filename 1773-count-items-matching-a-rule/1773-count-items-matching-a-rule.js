/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    const it = [];
    items.map((el) => {
        if (ruleKey == 'type' && ruleValue == el[0]) it.push(el);
        if (ruleKey == 'color' && ruleValue == el[1]) it.push(el);
        if (ruleKey == 'name' && ruleValue == el[2]) it.push(el);
    });
    return it.length;
};