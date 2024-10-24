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

function flipEquiv(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const nodePairsStack = [];
  nodePairsStack.push([root1, root2]);

  while (nodePairsStack.length) {
    const [treeNode1, treeNode2] = nodePairsStack.pop();
    if (!treeNode1 && !treeNode2) {
      continue;
    }

    if ((!treeNode1 || !treeNode2) || (treeNode1.val != treeNode2.val)) {
      return false;
    }

    if (isTreeNodeEquivalent(treeNode1.left, treeNode2.left) && isTreeNodeEquivalent(treeNode1.right, treeNode2.right)) {
      nodePairsStack.push([treeNode1.left, treeNode2.left]);
      nodePairsStack.push([treeNode1.right, treeNode2.right]);
    } else if (isTreeNodeEquivalent(treeNode1.left, treeNode2.right) && isTreeNodeEquivalent(treeNode1.right, treeNode2.left)) {
      nodePairsStack.push([treeNode1.left, treeNode2.right]);
      nodePairsStack.push([treeNode1.right, treeNode2.left]);
    } else {
      return false;
    }
  }

  return true;
};

function isTreeNodeEquivalent(treeNode1: TreeNode | null, treeNode2: TreeNode | null): boolean {
  if ((!treeNode1 && !treeNode2) || (treeNode1 && treeNode2 && treeNode1.val == treeNode2.val)) {
    return true;
  }
  
  return false;
};