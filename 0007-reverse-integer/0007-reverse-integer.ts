function getMax(){
    let result = 2;
    for(let i = 0; i < 30; i++){
        result *= 2;
    }
    return result - 1;
}

function reverse(x: number): number {
    const max = getMax();
    const min = -1 * (max + 1);
    const sign = x > 0 ? 1 : -1;
    
    const reversed = x.toString().split("").reverse().join('');
    const result = sign * parseInt(reversed);
    if(result < min || result > max){
        return 0;
    }
    
    return result;
};