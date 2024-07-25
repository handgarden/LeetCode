function max(){
    let m = 2;
    for(let i = 0; i<30;i++){
        m *= 2;
    }
    
    return m - 1;
}

function myAtoi(s: string): number {
    let trimed = s.trim();
    
    let sign = 1;
    if(trimed[0] == '-' || trimed[0] == '+'){
        sign = trimed[0] == '-' ? -1 : 1;
        trimed = trimed.slice(1);
    }
    
    let result = 0;
    const t = trimed.split('');
    for(const num of t){
        if(num > '9' || num <'0'){
            break;
        }
        result *= 10;
        result += parseInt(num);
    }

    result *= sign;
    const m = max();
    const m2 = (m + 1) * -1;
    return result > m ? m : result < m2 ? m2 : result;
};