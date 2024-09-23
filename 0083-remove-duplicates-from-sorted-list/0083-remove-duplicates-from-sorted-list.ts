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
  if (!temp || !temp.next) {
    return head;
  }

  while (isNotNull(temp.next)) {
    temp.val == temp.next.val ? temp.next = temp.next.next : temp = temp.next;
  }

  return head;
};

function isNotNull(v: any): boolean {
  return v != null;
};
