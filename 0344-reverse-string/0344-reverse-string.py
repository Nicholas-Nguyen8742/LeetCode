class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        copy = s[:]
        i = 0
        while i < len(s):
            s[i] = copy[len(s) - i - 1]
            i += 1
        