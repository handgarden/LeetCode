function coinChange(coins: number[], amount: number): number {
    if(amount === 0){
        return 0;
    }
    
    const dp = new Array(amount+1);
    dp[0] = 0;
    
    for(let i = 1; i<=amount;i++){
        dp[i] = Number.MAX_SAFE_INTEGER;
        for(let j = 0; j<coins.length;j++){
            if(i - coins[j] < 0){
                continue;
            }
            dp[i] = Math.min(dp[i], dp[i-coins[j]] + 1);
        }
        // console.log(i,dp[i]);
    }
    
    return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
};