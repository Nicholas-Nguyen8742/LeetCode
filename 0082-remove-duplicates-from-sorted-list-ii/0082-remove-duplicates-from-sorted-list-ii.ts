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
  if (!temp || temp.next == null) {
    return head;
  }

  let before = new ListNode(0);
  let dummyHead = before;

  const map = new Map();

  while (temp) {
    if (map.has(temp.val)) {
      map.set(temp.val, true);
    } else {
      map.set(temp.val, false);
    }
    temp = temp.next;
  }
  
  map.forEach((val, key) => {
    if (val === false) {
      dummyHead.next = new ListNode(key);
      dummyHead = dummyHead.next;
    }
  });

  return before.next;
};