class Solution:
    def jump(self, nums: List[int]) -> int:
        ARR_LEN = len(nums)
        if ARR_LEN == 1: 
            return 0
        dp = [0 for i in range(ARR_LEN)]
        for i in range(ARR_LEN):
            jump = nums[i]
            for j in range(1, jump+1):
                index = min(i+j, ARR_LEN - 1)
                dp[index] = min(dp[i] + 1, dp[index]) if dp[index] != 0 else dp[i] + 1
        return dp[ARR_LEN - 1]

            