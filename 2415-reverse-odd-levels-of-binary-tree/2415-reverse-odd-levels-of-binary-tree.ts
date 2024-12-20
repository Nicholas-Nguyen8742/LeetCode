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

function reverseOddLevels(root: TreeNode | null): TreeNode | null {
  traverseDfs(root.left, root.right, 0);
  return root;
};

function traverseDfs(leftChild: TreeNode | null, rightChild: TreeNode | null, level: number): void {
  if (leftChild === null || rightChild === null) {
    return;
  }
  
  if (level % 2 === 0) {
    let temp = leftChild.val;
    leftChild.val = rightChild.val;
    rightChild.val = temp;
  }
  
  traverseDfs(leftChild.left, rightChild.right, level + 1);
  traverseDfs(leftChild.right, rightChild.left, level + 1);
};