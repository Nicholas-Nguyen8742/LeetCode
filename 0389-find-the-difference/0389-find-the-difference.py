class Solution(object):
    def findTheDifference(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: str
        """
        for char in t:
            if char in s:
                s = s.replace(char, '', 1)
            else:
                return char