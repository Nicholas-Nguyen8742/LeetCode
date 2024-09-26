/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let before = new ListNode(0);
  let after = new ListNode(0);
  let beforeNode = before;
  let afterNode = after;
  
  while (head != null) {
    if (head.val < x) {
      beforeNode.next = head;
      beforeNode = beforeNode.next;
    } else {
      afterNode.next = head;
      afterNode = afterNode.next;
    }
    head = head.next;
  }
  
  afterNode.next = null;
  beforeNode.next = after.next;
  return before.next;
};