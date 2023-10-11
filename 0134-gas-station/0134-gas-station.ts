function canCompleteCircuit(gas: number[], cost: number[]): number {
    let sum = 0;
    const diff = [];
    for(let i = 0; i<gas.length;i++){
        const dif = gas[i] - cost[i];
        sum += dif;
        diff.push(dif);
    }
    if(sum < 0){
        return -1;
    }
    // console.log(diff);
    for(let i = 0; i<gas.length;i++){
        let count = 0;
        let tmp = 0;
        for(let j=0;j<gas.length;j++){
            const index = (i+j) % gas.length;
            tmp+=diff[index];
            // console.log(i, index, tmp);
            if(tmp<0){
                break;
            }
            count++;
        }
        if(count == gas.length){
            return i;
        }
    }
    return -1;
};