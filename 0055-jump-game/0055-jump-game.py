# 그래프?
# 0번 인덱스를 시작 노드로 생각
# 가능한 이동 거리의 인덱스들을 연결된 노드로 생각하고 탐색
# 이동을 1씩만도 할 수 있어서 현재 + max jump한게 마지막 인덱스 넘으면 도달 가능
# 그럼 그냥 순회하면서 끝까지 닿을 수 있나만 계산하면 됨
class Solution:
    def canJump(self, nums: List[int]) -> bool:
        maxIndex = 0;
        LAST_INDEX = len(nums) - 1
        for i in range(LAST_INDEX) :
            curJump = i + nums[i]
            if (nums[i] == 0 and maxIndex <= i) or maxIndex >= LAST_INDEX:
                break
            maxIndex = max(maxIndex, curJump)
        
        return maxIndex >= LAST_INDEX
        