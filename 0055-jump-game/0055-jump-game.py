# 그래프?
# 0번 인덱스를 시작 노드로 생각
# 가능한 이동 거리의 인덱스들을 연결된 노드로 생각하고 탐색
class Solution:
    def canJump(self, nums: List[int]) -> bool:
        maxSize = len(nums) - 1;
        visited = [False] * (maxSize + 1)
        que = []
        que.append(0);
        while(len(que) > 0) :
            index = que.pop(len(que) - 1)
            if visited[index] :
                continue
            if index == maxSize:
                return True
            visited[index] = True;
            size = min(index+nums[index], maxSize) + 1
            for i in range(index, size):
                que.append(i);
            
        return False
        