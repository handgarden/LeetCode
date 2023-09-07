function searchInsert(nums: number[], target: number): number {
    let start = 0;
    let end = nums.length - 1;
    while(start <= end){
        const mid = Math.floor((end + start) / 2);
        console.log(start, end, mid);
        if(nums[mid] === target){
            return mid;
        }else if(nums[mid] > target){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    if(start > end){
        return start;
    }
    
    return end;
    
};