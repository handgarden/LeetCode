# 특정일에 구매 후 나중에 팔아야함
# 최대 수익
# i일차 최대 수익 -> i+1 ~ N 까지 차 중에 max
# 최대 수익 = 각 날짜 수익의 최대 값
# 투 포인터?
# 현재 가격보다 다음날 가격이 더 낮으면 다음날 구매하는게 이득
# 판매일은 현재 가격보다 다음날 가격이 더 높으면 그때 판매하는게 이득 
# i = 0, j = 1에서 시작
# j는 현재보다 큰 값이 나올때까지 이동
# i는 현재보다 작고, j보다 작을 때 까지 이동
# 2 5 0 0 4 인 경우를 생각해보면 j가 5에서 시작하는데 더 진행 못함
# 그래서 결과가 3으로 나오는데 실제는 0, 4로 4가 최대 값
# 투포인터는 정렬된 상태에서 사용 가능하다고 함
# 완탐 
# 각 원소마다 뒤 원소와 비교해서 최대 값 찾기
# 시간 초과
# 1부터 시작해서 이전 날짜 중 최소 가격 뺴면 최대 수익
# 최소 가격은 앞으로 진행하면서 갱신 가능
# 1번만 순회하면 됨
class Solution:
    def maxProfit(self, prices: List[int]):
        maxDiff = 0
        minPrice = prices[0]
        for i in range(1, len(prices)) :
            maxDiff = max(maxDiff, prices[i] - minPrice)
            minPrice = minPrice if minPrice < prices[i] else prices[i]
        return maxDiff

