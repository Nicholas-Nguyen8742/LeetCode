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
var sortList = function(head) {
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