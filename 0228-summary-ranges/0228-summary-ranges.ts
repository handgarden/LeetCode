function summaryRanges(nums: number[]): string[] {
    if(!nums.length){
        return [];
    }
    let map = new Map<number, number>();
    
    let prev = nums[0];
    let prevKey = nums[0];
    map.set(prevKey, prev);
    for(let i = 0; i<nums.length; i++){
        if(prev === nums[i] || prev + 1 === nums[i]){
            map.set(prevKey, nums[i]);
        }else{
            map.set(nums[i],nums[i]);
            prevKey = nums[i];
        }
        prev = nums[i];
    }
    
    
    let result: string[] = [];
    for(let e of map.entries()){
        e[0] === e[1] ? result.push(e[0].toString()) : result.push(`${e[0]}->${e[1]}`);
    }
    return result;
    
};