class Solution(object):
    def lengthOfLastWord(self, s):
        """
        :type s: str
        :rtype: int
        """
        array_string = s.strip().split()
        return len(array_string[len(array_string) - 1])