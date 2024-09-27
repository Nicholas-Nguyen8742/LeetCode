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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (!lists || !lists.length) {
    return null;
  }

  let head = new ListNode(0);
  let valuesArray = [];

  lists.forEach((list) => {
    let currList = list;
    while (currList) {
      valuesArray.push(currList.val);
      currList = currList.next;
    }
  })
  
  let curr = head;
  valuesArray
    .sort((a, b) => a - b)
    .forEach((num) => {
      let temp = new ListNode(num);
      curr.next = temp;
      curr = curr.next;
    });
  
  return head.next;
};