function mySqrt(x: number): number {
    if(x === 0){
        return 0;
    }
    
    let max = 1;
    for(let i = 1; i<=(x/2);i++){
        if(i*i <= x){
            max = i;
        }else{
            break;
        }
    }
    return max;
};