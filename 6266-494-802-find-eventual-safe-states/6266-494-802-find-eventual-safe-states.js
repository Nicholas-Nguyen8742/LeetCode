/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    const n = graph.length;
    const indegree = new Array(n).fill(0);
    const adj = Array.from({ length: n }, () => []);

    for (let i = 0; i < n; i++) {
        for (const node of graph[i]) {
            adj[node].push(i);
            indegree[i]++;
        }
    }

    const queue = [];
    for (let i = 0; i < n; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    const safe = new Array(n).fill(false);
    while (queue.length > 0) {
        const node = queue.shift();
        safe[node] = true;

        for (const neighbor of adj[node]) {
            indegree[neighbor]--;
            if (indegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    const safeNodes = [];
    for (let i = 0; i < n; i++) {
        if (safe[i]) {
            safeNodes.push(i);
        }
    }

    return safeNodes;
};