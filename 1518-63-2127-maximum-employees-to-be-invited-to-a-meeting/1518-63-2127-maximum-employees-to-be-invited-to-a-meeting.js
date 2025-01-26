/**
 * @param {number[]} favorite
 * @return {number}
 */
var maximumInvitations = function(favorite) {
  const n = favorite.length;

  const inDegree = Array(n).fill(0);

  for (const person of favorite) {
    inDegree[person] += 1;
  }

  const visited = Array(n).fill(false);
  const longestChain = Array(n).fill(1);

  const queue = [];
  for (let i = 0; i < n; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
      visited[i] = true;
    }
  }

  while (queue.length > 0) {
    const currentNode = queue.pop();
    const nextNode = favorite[currentNode];

    inDegree[nextNode]--;
    longestChain[nextNode] = Math.max(longestChain[nextNode], longestChain[currentNode] + 1);

    if (inDegree[nextNode] === 0) {
      queue.push(nextNode);
      visited[nextNode] = true;
    }
  }

  let maxCycleLength = 0;
  let twoCycleChainLength = 0;
  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;

    let currentNode = i;
    let cycleLength = 0;

    while (!visited[currentNode]) {
      visited[currentNode] = true;
      currentNode = favorite[currentNode];
      cycleLength++;
    }

    if (cycleLength > 2) {
      maxCycleLength = Math.max(maxCycleLength, cycleLength);
    } else if (cycleLength === 2) {
      const node1 = i;
      const node2 = favorite[i];
      twoCycleChainLength += longestChain[node1] + longestChain[node2];
    }
  }

  return Math.max(maxCycleLength, twoCycleChainLength);
};