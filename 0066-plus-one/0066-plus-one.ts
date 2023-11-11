function plusOne(digits: number[]): number[] {
    let add = 1;
    for(let i = digits.length - 1; i>=0;i--){
        const added = digits[i] + add;
        if(added > 9){
            digits[i] = added % 10;
        }else{
            digits[i] = added;
            add = 0;
            break;
        }
    }
    if(add){
        digits.unshift(1);
    }
    
    return digits;
};