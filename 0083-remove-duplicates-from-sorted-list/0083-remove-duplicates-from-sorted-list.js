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
var deleteDuplicates = function(head) {
  let temp = head;
  if (!temp || temp.next == null) {
    return head;
  }

  while (temp.next !== null) {
    if (temp.val == temp.next.val) {
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    }
  }

  return head;
};