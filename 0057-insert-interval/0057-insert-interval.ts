function insert(intervals: number[][], newInterval: number[]): number[][] {
    const result:number[][] = [];
    
    let i = 0;
    for(; i < intervals.length; i++){ 
        const cur = intervals[i];
        if((cur[0] >= newInterval[0] && cur[0] <= newInterval[1]) || (cur[1] >= newInterval[0] && cur[1] <= newInterval[1])){
            newInterval = [Math.min(cur[0], newInterval[0]), Math.max(cur[1], newInterval[1])];
            continue;
        }
        if((cur[0] <= newInterval[0] && cur[1] >= newInterval[0]) || (cur[0] >= newInterval[1] && cur[1] <= newInterval[1])){
            newInterval = [Math.min(cur[0], newInterval[0]), Math.max(cur[1], newInterval[1])];
            continue;
        }
        if(cur[0] > newInterval[1]){
            break;
        }
        result.push(cur);        
    }
    
    result.push(newInterval);
    result.push(...intervals.slice(i));
    
    return result
};