function mySqrt(x: number): number {
    if(x === 0){
        return 0;
    }
    
    let max = 1;
    let i = 1;
    let j = x - 1;
    while(i<=j){
        let mid = Math.floor((i + j) / 2);
        if(mid * mid < x){
            max = mid;
            i = mid + 1;
        }else if(mid * mid == x){
            return mid;
        }else{
            j = mid - 1;
        }
    }
    
    return max;
};