/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let temp = head;
  let result = [];

  while (temp != null) {
    result.push(temp.val);
    temp = temp.next;
  }
  
  return numArrayToString(result.toReversed()) === numArrayToString(result) ;
};

var numArrayToString = function(arr) {
  return arr.join('');
}