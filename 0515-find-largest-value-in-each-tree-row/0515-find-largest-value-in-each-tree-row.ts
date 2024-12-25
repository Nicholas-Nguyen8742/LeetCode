/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function largestValues(root: TreeNode | null): number[] {
  const largestValuePerRow: number[] = [];

  function depthFirstSearch(node: TreeNode | null, depth: number) {
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