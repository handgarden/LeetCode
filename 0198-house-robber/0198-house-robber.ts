function rob(nums: number[]): number {
    let dp = [];
    let result = 0;
    for(let i = 0; i<nums.length;i++){
        let max = 0;
        if(i-2 >= 0){
            max = dp[i-2];
        }
        if(i-3>=0){
            max = Math.max(dp[i-3], max);
        }
        dp.push(nums[i] + max);
        result = Math.max(dp[i], result);
    }
    
    return result;
};