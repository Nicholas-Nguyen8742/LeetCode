/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function(n, edges) {
  let indegree = new Array(n).fill(0);
  for (const [winner, loser] of edges) {
    indegree[loser]++;
  }

  let champ = -1;
  let champCount = 0;

  for (let i = 0; i < n; i++) {
    if (indegree[i] === 0) {
      champCount++;
      champ = i;
    }
  }

  return champCount === 1 ? champ : -1;
};