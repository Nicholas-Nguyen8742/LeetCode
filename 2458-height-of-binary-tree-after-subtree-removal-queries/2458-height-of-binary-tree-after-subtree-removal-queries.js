/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} queries
 * @return {number[]}
 */
var treeQueries = function(root, queries) {
  const resultMap = new Map();
  const heightCache = new Map();

  function height(node) {
    if (!node) {
      return -1;
    }

    if (heightCache.has(node)) {
      return heightCache.get(node);
    }

    const h = 1 + Math.max(height(node.left), height(node.right));
    heightCache.set(node, h);
    return h;
  };

  function dfs(node, depth, maxVal) {
    if (!node) {
      return;
    }

    resultMap.set(node.val, maxVal);

    dfs(
        node.left,
        depth + 1,
        Math.max(maxVal, depth + 1 + height(node.right))
    );

    dfs(
        node.right,
        depth + 1,
        Math.max(maxVal, depth + 1 + height(node.left))
    );
  };

  dfs(root, 0, 0);

  return queries.map((q) => resultMap.get(q) || 0);  
};
