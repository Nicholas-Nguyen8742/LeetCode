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

function sortList(head: ListNode | null): ListNode | null {
  if (!head) {
    return head;
  }
  const result = [];
  let temp = head;
  
  while (temp) {
    if (temp.val != null) {
      result.push(temp.val);
    }
    temp = temp.next;
  }

  result.sort((a, b) => a - b);

  let list = new ListNode(0);
  let tempList = list;
  result.forEach((num) => {
    const node = new ListNode(num);
    tempList.next = node;
    tempList = tempList.next;
  });
  return list.next;
};