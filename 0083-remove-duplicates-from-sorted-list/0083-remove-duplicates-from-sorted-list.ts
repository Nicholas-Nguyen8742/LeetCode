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
  let temp = head;
  if (temp == null || temp.next == null) {
    return head;
  }
  
  while (temp.next != null) {
    temp.next.val === temp.val ? temp.next = temp.next.next : temp = temp.next;
  }

  return head;
};
