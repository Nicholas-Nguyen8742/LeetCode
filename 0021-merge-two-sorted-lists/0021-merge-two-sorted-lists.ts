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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let list = new ListNode(0);
  let curr = list;
  let temp1 = list1;
  let temp2 = list2;
  while (temp1 || temp2) {
    if (temp1 === null || (temp2 !== null && temp2.val < temp1.val)) {
      curr.next = temp2;
      temp2 = temp2.next;
    } else {
      curr.next = temp1;
      temp1 = temp1.next;
    }
    curr = curr.next;
  }
  return list.next;
};