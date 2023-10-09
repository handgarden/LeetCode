function rob(nums: number[]): number {
    let dp = [];
    let result = 0;
    for(let i = 0; i<nums.length;i++){
        let max = 0;
        for(let j = i-2;j>=0;j--){
            max = Math.max(max, dp[j]);
        }
        dp.push(nums[i] + max);
        result = Math.max(dp[i], result);
    }
    
    return result;
};