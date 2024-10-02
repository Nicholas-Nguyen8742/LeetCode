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
  let result = [];

  while (head != null) {
    result.push(head.val);
    head = head.next;
  }
  
  return numArrayToString(result.toReversed()) === numArrayToString(result) ;
};

var numArrayToString = function(arr) {
  return arr.join('');
}