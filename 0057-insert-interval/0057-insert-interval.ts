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
    
    smaller(inv: Interval){
        return this.end < inv.start;
    }

    toArray(){
        return [this.start, this.end];
    }
    
}

function insert(intervals: number[][], newInterval: number[]): number[][] {
    const ins = intervals.map(i => new Interval(i[0], i[1]));

    let input: Interval | null = new Interval(newInterval[0], newInterval[1]);
    
    const result = ins.reduce((total, cur) => {
        if(!input || cur.smaller(input)){
            return [...total, cur];
        }
        
        if(cur.isOverlaped(input)){
            input = cur.merge(input);
            return total;
        }
        if(!cur.smaller(input)){
            const tmp = input;
            input = null;
            return [...total, tmp, cur];
        }
        
        return [...total, cur]
    },[])
    
    if(input){
        result.push(input);
    }
    
    return result.map(r=>r.toArray())
};