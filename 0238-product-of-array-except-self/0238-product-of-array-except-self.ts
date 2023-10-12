function productExceptSelf(nums: number[]): number[] {
    const len = nums.length;
    const left_product = new Array(len);
    left_product[0] = 1;
    for(let i = 1; i<len ;i++){
        left_product[i] = left_product[i-1] * nums[i-1];
    }
    const right_product = new Array(len);
    right_product[len-1] = 1;
    for(let i = len - 2; i>=0;i-- ){
        right_product[i] = right_product[i+1] * nums[i+1];
    }
    
    const result = new Array(len);
    for(let i = 0; i<len;i++){
        result[i] = left_product[i] * right_product[i];
    }
    
    return result;
};

