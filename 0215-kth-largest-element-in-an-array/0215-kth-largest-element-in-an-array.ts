class Heap{
    arr: number[] = [0];

    add(val: number){
        this.arr.push(val);
        let cur = this.arr.length - 1;
        while(cur > 1){
            const parent = Math.floor(cur/2);
            if(parent > 0 && this.arr[parent] < this.arr[cur]){
                const tmp = this.arr[parent];
                this.arr[parent] = this.arr[cur];
                this.arr[cur] = tmp;
                cur = parent;
            }else{
                break;
            }
        }
    }

    remove(){
        if(this.isEmpty()){
            throw Error();
        }
        const result = this.arr[1];
        const last = this.arr.pop();
        this.arr[1] = last;
        let cur = 1;
        while(cur < this.arr.length){
            const left = cur * 2;
            if(left >= this.arr.length){
                break;
            }
            const right = left + 1;
            if(right >= this.arr.length){
                if(this.arr[left] > this.arr[cur]){
                    const tmp = this.arr[left];
                    this.arr[left] = this.arr[cur];
                    this.arr[cur] = tmp;
                }
                break;
            }
            const bigIndex = this.arr[left] > this.arr[right] ? left : right;
            if(this.arr[bigIndex] > this.arr[cur]){
                const tmp = this.arr[bigIndex];
                this.arr[bigIndex] = this.arr[cur];
                this.arr[cur] = tmp;
                cur = bigIndex;
            }else{
                break;
            }
        }
        return result;
    }

    isEmpty(){
        return this.arr.length < 2;
    }
}

function findKthLargest(nums: number[], k: number): number {
    const heap = new Heap();
    for(const num of nums){
        heap.add(num)
    }
    if(heap.isEmpty()){
        throw new Error();
    }
    let count = 0;
    while(!heap.isEmpty()){
        count++;
        const val = heap.remove();
        if(count === k){
            return val;
        }
    }
 
};