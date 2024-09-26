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
var reverseList = function(head, tail = null) {
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