type Index = number;

function threeSum(nums: number[]): number[][] {
    nums.sort((a,b) => a - b);

    const result = new Set<string>();
    for(let i = 0; i<nums.length-2;i++){
        if(i > 0 && nums[i - 1] == nums[i]){
            continue;
        }
        let j = i+1; 
        let k = nums.length - 1;
        while(j < k){
            const sum = nums[i] + nums[j] + nums[k];

            if(sum == 0){
                result.add(`${nums[i]},${nums[j]},${nums[k]}`);
                j++;
                k--;
                continue;
            }

            if(sum < 0){
                j++;
            }
            
            if(sum > 0){
                k--;
            }
        }
    }

    return [...result.values()].map(r => r.split(",").map(s => parseInt(s, 10)).flat());
};