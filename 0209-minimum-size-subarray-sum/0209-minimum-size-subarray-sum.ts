function minSubArrayLen(target: number, nums: number[]): number {
    let sum = 0;
    
    for(let t = 0; t<nums.length;t++){
        sum+=nums[t];
    }
    
    if(sum < target)
        return 0;
    
    let result = nums.length;
    
    let i = 0;
    let j = 0;
    
    let cur = 0;
    let ans = nums.length + 1;
    while(i<=j && j<nums.length){
        cur += nums[j];
        while(cur >= target && i<=j){
            ans = Math.min(ans, j-i + 1);
            cur -= nums[i++];
        }
        j++;
    }
    return ans === nums.length + 1 ? 0 : ans;
};