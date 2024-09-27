/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
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