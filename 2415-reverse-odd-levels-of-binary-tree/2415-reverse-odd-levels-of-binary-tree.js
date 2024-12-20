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
 * @return {TreeNode}
 */
var reverseOddLevels = function(root) {
  traverseDfs(root.left, root.right, 0);
  return root;
};

var traverseDfs = function(leftChild, rightChild, level) {
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