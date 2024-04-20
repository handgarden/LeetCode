class Index {
    readonly i: number;
    readonly j: number;
    constructor(i: number, j: number){
        this.i = i;
        this.j = j;
    };
}

class PathFinder {
    getPrevPath(index: Index){
        if(index.i - 1 < 0 && index.j - 1 < 0){
            return [];
        }
        const left = new Index(index.i, index.j - 1);
        const up = new Index(index.i - 1, index.j);
        if(index.j - 1 < 0){
            return [up];
        }
        if(index.i - 1 < 0){
            return [left];
        }
        return [up, left];
    }
}

class GridDP {
    readonly gridDP = [];
    constructor(max: Index){
        for(let i = 0; i<=max.i; i++){
            this.gridDP.push(new Array(max.j + 1).fill(0))
        }
    }

    setVal(index: Index, val: number){
        this.gridDP[index.i][index.j] = val;
    }

    getVal(index: Index){
        return this.gridDP[index.i][index.j];
    }

    getPrevVal(prevIndexes: Index[]){
        if(!prevIndexes.length){
            throw new Error('invalid input'); 
        }
        let val = this.gridDP[prevIndexes[0].i][prevIndexes[0].j];
        for(let i = 1; i<prevIndexes.length; i++){
            val = Math.min(val, this.gridDP[prevIndexes[i].i][prevIndexes[i].j]);
        }
        return val;
    }
}


function minPathSum(grid: number[][]): number {
    const maxIndex = new Index(grid.length - 1, grid[0].length - 1);
    const dp = new GridDP(maxIndex);
    const pathFinder = new PathFinder();

    dp.setVal(new Index(0,0), grid[0][0]);
    for(let i = 0; i<=maxIndex.i; i++){
        for(let j = 0; j<=maxIndex.j; j++){
            if(i == 0 && j==0){
                continue;
            }
            const curIndex = new Index(i,j);
            const curVal = grid[i][j];
            const prevPath = pathFinder.getPrevPath(curIndex);
            const prevVal = dp.getPrevVal(prevPath);
            dp.setVal(curIndex, prevVal + curVal);
        }
    }
    
    
    return dp.getVal(maxIndex);
};