class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # hash map one pass (ultimate sol)
        # tc is O(n) and sc is O(1)
        # nums = [3,4,5,6], target = 7
        dict ={}
        for i, n in enumerate(nums):
            dict[n]=i
        for i, n in enumerate(nums):
            diff = target - n
            if diff in dict and dict[diff] != i:
                return [i, dict[diff]]
        return []