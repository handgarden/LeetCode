function isHappy(n: number): boolean {
    if(n===1){
        return true;
    }
    const set = new Set<number>();
    while(!set.has(n)){
        set.add(n);
        let sum = 0;
        n.toString().split("").forEach(a=>sum+=parseInt(a)*parseInt(a)); 
        
        if(sum === 1){
            return true;
        }
        n=sum;
    }
    
    return false;
};

// 1 + 81 82
// 64 + 4 68
// 36 + 64
