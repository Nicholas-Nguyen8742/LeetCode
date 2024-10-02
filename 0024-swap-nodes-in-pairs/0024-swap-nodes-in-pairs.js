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
var swapPairs = function(head) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let prevDummy = dummy;
  
  while (head && head.next) {
    let first = head;
    let second = head.next;

    first.next = second.next;
    second.next = first;
    prevDummy.next = second;
    
    prevDummy = first;
    head = first.next;

  }
  
  return dummy.next;
};