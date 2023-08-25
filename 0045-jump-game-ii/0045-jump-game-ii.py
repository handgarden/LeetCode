class Solution:
    def jump(self, nums: List[int]) -> int:
        visited = [False] * len(nums)
        que = deque()
        que.append(0)
        level = 0
        size = 1    
        while que:
            newSize = 0
            for j in range(size):
                cur = que.popleft()
                if cur >= len(nums) - 1:
                    return level
                jump = nums[cur]
                for i in range(cur + 1, min(cur + 1 + jump, len(nums))):
                    if not visited[i]:
                        visited[i] = True
                        que.append(i)
                        newSize+=1
            size = newSize
            level+=1
        return level

            