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

function kthLargestLevelSum(root: TreeNode | null, k: number): number {
  const pq = [];
  const bfsQueue = [];
  bfsQueue.push(root);

  while (bfsQueue.length > 0) {
    let size = bfsQueue.length;
    let levelSum = 0;

    for (let i = 0; i < size; i++) {
      let node = bfsQueue.shift();
      levelSum += node.val;

      if (node.left) {
          bfsQueue.push(node.left);
      }

      if (node.right) {
          bfsQueue.push(node.right);
      }
    }

    pq.push(-levelSum);
  }

  if (pq.length < k) {
      return -1;
  }

  pq.sort((a, b) => a - b);

  for (let i = 0; i < k - 1; i++) {
    pq.shift();
  }

  return -pq.shift();
};