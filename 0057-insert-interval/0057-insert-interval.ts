class Interval {
    start: number;
    end: number;

    constructor(start: number, end: number){
        this.start = start;
        this.end = end;
    }

    isOverlaped(inv: Interval){
        if(inv.start > this.end){
            return false;
        }
        
        if(inv.end < this.start){
            return false;
        }
        
        return true;
    }

    merge(inv: Interval){
        const newIn = new Interval(Math.min(this.start, inv.start), Math.max(this.end, inv.end));
        return newIn;
    }

    equal(inv: Interval){
        return this.start === inv.start && this.end === inv.end;
    }
    
    bigger(inv: Interval){
        return this.start > inv.end;
    }

    toArray(){
        return [this.start, this.end];
    }
    
}

function insert(intervals: number[][], newInterval: number[]): number[][] {
    const ins = intervals.map(i => new Interval(i[0], i[1]));

    let input: Interval = new Interval(newInterval[0], newInterval[1]);
    
    const result = [];
    
    let i = 0;
    for(; i < ins.length; i++){ 
        const cur = ins[i];
        if(cur.isOverlaped(input)){
            input = cur.merge(input);
            continue;
        }
        if(cur.bigger(input)){
            break;
        }
        result.push(cur);        
    }
    
    result.push(input);
    result.push(...ins.slice(i));
    
    return result.map(r=>r.toArray())
};