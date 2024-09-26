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
  let beforeCurr = before;
  let afterCurr = after;
  
  while (head != null) {
    if (head.val < x) {
      beforeCurr.next = head;
      beforeCurr = beforeCurr.next;
    } else {
      afterCurr.next = head;
      afterCurr = afterCurr.next;
    }
    head = head.next;
  }
  
  afterCurr.next = null;
  beforeCurr.next = after.next;
  return before.next;
};