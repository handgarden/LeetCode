function canCompleteCircuit(gas: number[], cost: number[]): number {
    let sum = 0;
    let curSum = 0;
    let start = 0;
    let len = gas.length;
    for(let i = 0; i < len;i++){
        const diff = gas[i] - cost[i];
        sum+=diff;
        curSum+=diff;
        if(curSum < 0){
            start = i+1;
            curSum=0;
        }
    }
    
    return sum < 0 ? -1 : start % len;
};