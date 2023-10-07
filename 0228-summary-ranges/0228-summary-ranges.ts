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
    console.log(map.keys());
    for(let key of map.keys()){
        const val = map.get(key);
        if(val === key){
            result.push(key.toString());
        }else{
            result.push(`${key}->${val}`);
        }
    }
    return result;
    
};