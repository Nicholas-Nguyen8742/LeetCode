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
var replaceValueInTree = function(root) {
  if (!root) return root;

  const nodeQueue = [root];
  const levelSums = [];

  while (nodeQueue.length > 0) {
    let levelSum = 0;
    const levelSize = nodeQueue.length;

    for (let i = 0; i < levelSize; i++) {
      const currentNode = nodeQueue.shift();
      levelSum += currentNode.val;

      if (currentNode.left) nodeQueue.push(currentNode.left);
      if (currentNode.right) nodeQueue.push(currentNode.right);
    }
    levelSums.push(levelSum);
  }

  nodeQueue.push(root);
  let levelIndex = 1;
  root.val = 0;

  while (nodeQueue.length > 0) {
    const levelSize = nodeQueue.length;

    for (let i = 0; i < levelSize; i++) {
      const currentNode = nodeQueue.shift();

      const siblingSum = 
        (currentNode.left ? currentNode.left.val : 0) +
        (currentNode.right ? currentNode.right.val : 0);

      if (currentNode.left) {
        currentNode.left.val = levelSums[levelIndex] - siblingSum;
        nodeQueue.push(currentNode.left);
      }
      if (currentNode.right) {
        currentNode.right.val = levelSums[levelIndex] - siblingSum;
        nodeQueue.push(currentNode.right);
      }
    }
    levelIndex++;
  }

  return root;
};