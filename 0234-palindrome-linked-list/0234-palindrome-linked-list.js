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
var isPalindrome = function(head, result = []) {
  if (head != null) {
    result.push(head.val);
    head = head.next;
    return isPalindrome(head, result);
  }

  return result.toReversed().join('') === result.join('');
};