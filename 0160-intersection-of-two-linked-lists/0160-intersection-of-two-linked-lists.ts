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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let tempA = headA, tempB = headB;
  while (tempA !== tempB) {
    tempA = !tempA ? headB : tempA.next;
    tempB = !tempB ? headA : tempB.next;
  }
  return tempA;
};