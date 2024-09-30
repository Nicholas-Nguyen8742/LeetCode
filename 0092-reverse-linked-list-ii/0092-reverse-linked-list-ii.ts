/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
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