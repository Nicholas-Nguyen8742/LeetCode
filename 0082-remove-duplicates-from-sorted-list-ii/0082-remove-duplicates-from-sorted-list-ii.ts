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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let dummyHead = new ListNode(0);
  dummyHead.next = head;

  let prev = dummyHead;
  let temp = head;

  while (temp) {
    while (temp.next && temp.val == temp.next.val) {
      temp = temp.next;
    }
    if (prev.next == temp) {
      prev = temp;
    } else {
      prev.next = temp.next;
    }
    temp = temp.next;
  }

  return dummyHead.next;
};