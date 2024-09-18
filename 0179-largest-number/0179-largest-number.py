class Solution:
    def largestNumber(self, nums: List[int]) -> str:
      strings_list = [str(num) for num in nums]
      
      strings_list.sort(key=lambda a: a * 10, reverse=True)
      
      if strings_list[0] == '0':
        return '0'
      
      return "".join(strings_list)
        