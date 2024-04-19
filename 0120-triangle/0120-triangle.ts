class Index {
    i: number;
    j: number;
    max: number;

    constructor(i: number, j: number, max: number ){
        this.i = i;
        this.j = j;
        this.max = max;
    }

    leftPrev(){
        if(this.i - 1 < 0 || this.j - 1 <0 ){
            return null;
        }
        
        return new Index(this.i-1, this.j-1, this.max-1);
    }

    rightPrev(){
        if(this.i-1 < 0 || this.j >= this.max){
            return null;
        }
        
        return new Index(this.i-1, this.j, this.max-1);
    }
}

function minimumTotal(triangle: number[][]): number {
    
    const sums = [[triangle[0][0]]];
    for(let i = 1; i<triangle.length; i++){
        const curSums = [];
        for(let j = 0; j<triangle[i].length; j++){
            const curIndex = new Index(i,j, triangle[i].length - 1);
            const prevSum = getPrevSum(sums, curIndex);
            curSums.push(triangle[i][j]+prevSum);
        }
        sums.push(curSums);
    }
    return Math.min(...sums[triangle.length-1]);
};

function getPrevSum(arr: number[][], curIndex: Index){
    const left = curIndex.leftPrev();
    const right = curIndex.rightPrev();
    
    if(!left && !right){
        return 0;
    }
    if(!left){
        return arr[right.i][right.j];
    }
    if(!right){
        return arr[left.i][left.j];
    }
    return Math.min(arr[left.i][left.j], arr[right.i][right.j]);
}