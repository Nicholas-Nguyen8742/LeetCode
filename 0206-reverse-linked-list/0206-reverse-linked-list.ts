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

function reverseList(head: ListNode | null): ListNode | null {
  let tail = null;
  let temp = head;
  while (temp != null) {
    let nextTemp = temp.next;
    temp.next = tail;
    tail = temp;
    temp = nextTemp;
  }
  return tail;
};