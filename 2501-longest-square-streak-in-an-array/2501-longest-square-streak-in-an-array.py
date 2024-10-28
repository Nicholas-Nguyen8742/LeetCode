class Solution(object):
    def longestSquareStreak(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        streak = -1;
        unique = set(nums);

        for curr in nums:
            length = 0
            while curr in unique:
                length += 1
                curr = curr ** 2

            if length > 1:
                streak = max(streak, length)        

        return streak
        