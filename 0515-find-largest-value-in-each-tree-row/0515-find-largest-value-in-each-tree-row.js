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
 * @return {number[]}
 */
var largestValues = function(root) {
  const largestValuePerRow = [];

  function depthFirstSearch(node, depth) {
    if (node == null) {
      return;
    }
            
    if (depth == largestValuePerRow.length){
      largestValuePerRow.push(node.val)
    } else {
      largestValuePerRow[depth] = Math.max(largestValuePerRow[depth], node.val)
    }
    depthFirstSearch(node.left, depth + 1)
    depthFirstSearch(node.right, depth + 1)
  }

  depthFirstSearch(root, 0);

  return largestValuePerRow;
};