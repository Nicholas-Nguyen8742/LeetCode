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

function reverseList(head: ListNode | null, tail: ListNode | null = null): ListNode | null {
  if (head == null) {
    return tail;
  }
  let temp = head;
  let nextTemp = temp.next;
  temp.next = tail;
  tail = temp;
  temp = nextTemp;
  return reverseList(temp, tail);
};