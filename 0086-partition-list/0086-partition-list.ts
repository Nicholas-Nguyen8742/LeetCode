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

function partition(head: ListNode | null, x: number): ListNode | null {
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