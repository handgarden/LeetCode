class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = list(filter(lambda c: (c>='A' and c<='Z') or (c>='a' and c<='z') or (c>='0' and c<='9'),s));
        print(s)
        
        s = list(map(lambda c: c.lower(), s))
        
        i = 0
        j = len(s) - 1
        while i < j:
            if s[i] != s[j]:
                return False
            i+=1
            j-=1
            
        return True