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
  let before = new ListNode(0);
  let dummyHead = before;

  const map = new Map();
  if (!temp || temp.next == null) {
    return head;
  }

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