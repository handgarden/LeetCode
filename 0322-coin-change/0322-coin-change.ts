function coinChange(coins: number[], amount: number): number {
    if(amount === 0){
        return 0;
    }
    
    const arr = new Array(amount+1);
    arr[0] = 0;
    coins.forEach(c=>{
        let i = 1;
        while(c * i <= amount){
            const curAmount = c * i;
            if(!arr[curAmount] || arr[curAmount] > i){
                arr[curAmount] = i;
            }
            
            for(let j = 1; j+curAmount <= amount; j++){
                if(!arr[j]){
                    continue;
                }
                
                const prevCount = arr[j+curAmount];
                if(!prevCount || prevCount > arr[j] + i){
                    arr[j+curAmount] = arr[j] + i;
                }
            }
            
            
            i++;
        }
    })
    
    return arr[amount] || -1;
};