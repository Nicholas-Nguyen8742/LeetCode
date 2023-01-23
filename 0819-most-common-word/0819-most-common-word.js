/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  const clean = paragraph.replace(/,/g, ' ').replace(/[&\/\\#;,!+()$~%.'":*?<>{}]/g, '').toLowerCase().split(' ');
  const without = clean.filter((element) => element === "" ? element : !banned.includes(element));
  const map = without.reduce((acc, val) => {
      acc.has(val) ? acc.set(val, acc.get(val) + 1) : acc.set(val, 1);
      return acc;
   }, new Map);
   const frequencyArray = Array.from(map);
   return frequencyArray.sort((a, b) => b[1] - a[1])[0][0];
};