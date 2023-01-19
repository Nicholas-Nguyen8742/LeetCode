/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const map = {
      0: "Gold Medal",
      1: "Silver Medal",
      2: "Bronze Medal"
    };
    let dup = [...score].sort((a, b) => b - a);
    let results = [];
    score.map((el) => {
      const found = dup.findIndex((element) => el === element);
      if (map[found]) results.push(map[found]);
      if (found > 2) results.push((found + 1).toString());
    });
    return results;
};