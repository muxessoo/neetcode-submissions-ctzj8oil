class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        copy_list = set()
        for n in nums:
            if n in copy_list:
                return True
            copy_list.add(n)
        return False

        