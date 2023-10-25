function coinChange(coins: number[], amount: number): number {
    if(amount === 0){
        return 0;
    }
    
    const map = new Map<number, number>();
    map.set(0,0);
    coins.forEach(c=>{
        let i = 1;
        while(c * i <= amount){
            const curAmount = c * i;
            let prevCount = map.get(curAmount);
            if(!prevCount || prevCount > i){
                map.set(curAmount, i);
                prevCount = i;
            }
            
            for(let j = 1; j+curAmount <= amount; j++){
                const diffCount = map.get(j);
                if(!diffCount){
                    continue;
                }
                
                const prevCount = map.get(j+curAmount);
                if(!prevCount || prevCount > diffCount + i){
                    map.set(j+curAmount, diffCount+i);
                }
            }
            
            
            i++;
        }
    })
    
    const result = map.get(amount);
    return result || -1;
};