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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null, list: ListNode | null = new ListNode(0), curr: ListNode | null = null): ListNode | null {
  if (curr == null) {
    curr = list;
  }

  if (list1 == null && list2 == null && list != null) {
    return list.next;
  }

  if (list1 === null || (list2 !== null && list2.val < list1.val)) {
    curr.next = list2;
    list2 = list2.next;
  } else {
    curr.next = list1;
    list1 = list1.next;
  }
  curr = curr.next;
  return mergeTwoLists(list1, list2, list, curr);
};