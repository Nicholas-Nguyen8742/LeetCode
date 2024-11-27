/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceAfterQueries = function(n, queries) {
  let answer = [];
  let adjList = Array.from({ length: n }, () => []);

  for (let i = 0; i < n - 1; i++) {
    adjList[i].push(i + 1);
  }

  for (const road of queries) {
    let [u, v] = road;
    adjList[u].push(v);
    answer.push(bfs(n, adjList));
  }

  return answer;
}

var bfs = function(n, adjList) {
  let visited = new Array(n).fill(false);
  let nodeQueue = [];

  nodeQueue.push(0);
  visited[0] = true;

  let currentLayerNodeCount = 1;
  let nextLayerNodeCount = 0;
  let layersExplored = 0;

  while (nodeQueue.length > 0) {
    for (let i = 0; i < currentLayerNodeCount; i++) {
      let currentNode = nodeQueue.shift();

      if (currentNode === n - 1) {
        return layersExplored;
      }

      for (const neighbor of adjList[currentNode]) {
        if (visited[neighbor]) continue;
        nodeQueue.push(neighbor);  // Add neighbor to the queue for exploration
        nextLayerNodeCount++;
        visited[neighbor] = true;
      }
    }

    currentLayerNodeCount = nextLayerNodeCount;
    nextLayerNodeCount = 0;
    layersExplored++;
  }

  return -1;
};