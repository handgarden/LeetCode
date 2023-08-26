# h paper & h cited each
# 정렬 후 인덱스 계산 

class Solution:
    def hIndex(self, citations: List[int]) -> int:
        # 정렬
        if len(citations) == 1 and citations[0] > 0:
            return 1
        citations.sort()
        maxh = 0
        paperSize = len(citations)
        for i in range(paperSize):
            p = paperSize - i
            h =  min(p, citations[i])
            maxh = max(maxh,h)
            #print(p, citations[i], maxh)
        return maxh
        
# 0 1 3 5 6
