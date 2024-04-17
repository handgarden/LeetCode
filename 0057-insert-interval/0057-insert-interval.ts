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

    let cur: Interval | null = new Interval(newInterval[0], newInterval[1]);
    
    const result = [];
    for(const elem of ins){
        if(!cur){
            result.push(elem);
            continue;
        }
        if(elem.isOverlaped(cur)){
            cur = elem.merge(cur);
        }else if(elem.smaller(cur)){
            result.push(elem);
        }
        else{
            result.push(cur);
            result.push(elem);
            cur = null;
        }
    }
    if(cur){
        result.push(cur);
    }
    
    return result.map(r=>r.toArray())
};