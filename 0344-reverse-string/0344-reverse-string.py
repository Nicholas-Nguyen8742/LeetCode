class Solution(object):
    def reverseString(self, s):
        """
        :type s: List[str]
        :rtype: None Do not return anything, modify s in-place instead.
        """
        copy = list(s)
        i = 0
        while i < len(s):
            s[i] = copy[len(s) - i - 1]
            i += 1

        