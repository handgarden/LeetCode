function longestPalindrome(s: string): string {
    const dp = new Array(s.length);
    
    for(let i = 0; i < s.length; i++){
        dp[i] = new Array(s.length).fill(false);
        dp[i][i] = true;
        const next = i + 1;
        if(next < s.length && s[i] === s[next]){
            dp[i][next] = true;
        }
    }

    const count = 3;
    for(let i = 2; i<s.length; i++){
        for(let j = 0; j<= s.length - i; j++){
            const left = j;
            const right = j + i;

            if(s[left] !== s[right]){
                continue;
            }

            if(!dp[left + 1][right -1]){
                continue;
            }
            dp[left][right] = true;
        }
    }
    let maxI = 0;
    let maxJ = 0;
    for(let i = 0; i<s.length; i++){
        for(let j=0;j<s.length; j++){
            if(dp[i][j] && j - i > maxJ - maxI){
                maxI = i;
                maxJ = j;       
                }
        }
    }

    return s.slice(maxI,maxJ+1);
};