class MinStack {
    private stack:number[][] = [];
    
    push(val: number): void {
        if(this.stack.length < 1){
            this.stack.push([val,val]);
        }else{
            const lastIndex = this.stack.length - 1;
            const min = this.stack[lastIndex][1];
            this.stack.push([val, Math.min(val, min)]);
        }
    }

    pop(): void {
        this.stack.pop();
    }

    top(): number {
        const lastIndex = this.stack.length - 1;
        
        return this.stack[lastIndex][0];
    }

    getMin(): number {
        const lastIndex = this.stack.length - 1;
        return this.stack[lastIndex][1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */