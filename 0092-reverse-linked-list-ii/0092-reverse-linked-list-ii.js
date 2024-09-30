/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  const conditionNodes = [];
  const shouldReverse = (num) => left <= num && num <= right;
  let i = 1;
  let temp = head;
  while (temp) {
    if (temp.val != null && shouldReverse(i)) {
      conditionNodes.push(temp.val);
    }
    i++;
    temp = temp.next;
  }
  
  temp = head;
  i = 1;
  
  while (temp) {
    if (temp.val != null && conditionNodes.length && shouldReverse(i)) {
      temp.val = conditionNodes[conditionNodes.length - 1];
      conditionNodes.pop();
    }
    i++;
    temp = temp.next;
  }
  
  return head;
};