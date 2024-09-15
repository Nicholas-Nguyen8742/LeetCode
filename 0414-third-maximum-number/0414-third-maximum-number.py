class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        uniqueList = sorted(list(set(nums)))
        listLength = len(uniqueList)
        
        if listLength < 3:
          return uniqueList[listLength - 1]

        return uniqueList[listLength - 3]