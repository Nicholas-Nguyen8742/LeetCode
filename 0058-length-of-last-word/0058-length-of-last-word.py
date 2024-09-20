class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        array_string = s.strip().split()
        return len(array_string[len(array_string) - 1])