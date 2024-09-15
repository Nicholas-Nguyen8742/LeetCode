class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        uniqueSet = set(nums)
        uniqueList = sorted(list(uniqueSet))
        listLength = len(uniqueList)
        
        if listLength < 3:
          return uniqueList[listLength - 1]

        return uniqueList[listLength - 3]