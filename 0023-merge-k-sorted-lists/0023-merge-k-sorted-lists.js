/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (!lists || !lists.length) {
    return null;
  }

  let head = new ListNode(0);
  let valuesArray = [];

  for (let i = 0; i < lists.length; i++) {
    let currList = lists[i];
    while (currList) {
      valuesArray.push(currList.val);
      currList = currList.next;
    }
  }
  
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