
class PathFinder {
    getPrevPath(i: number, j: number){
        if(i - 1 < 0 && j - 1 < 0){
            return [];
        }
        const left = [i, j - 1];
        const up = [i - 1, j];
        if(j - 1 < 0){
            return [up];
        }
        if(i - 1 < 0){
            return [left];
        }
        return [up, left];
    }
}

class GridDP {
    readonly gridDP = [];
    constructor(maxI: number, maxJ: number){
        for(let i = 0; i<=maxI; i++){
            this.gridDP.push(new Array(maxJ + 1).fill(0))
        }
    }

    setVal(i: number, j:number, val: number){
        this.gridDP[i][j] = val;
    }

    getVal(i: number, j: number){
        return this.gridDP[i][j];
    }

    getPrevVal(prevIndexes: number[][]){
        let val = this.gridDP[prevIndexes[0][0]][prevIndexes[0][1]];
        for(let i = 1; i<prevIndexes.length; i++){
            val = Math.min(val, this.gridDP[prevIndexes[i][0]][prevIndexes[i][1]]);
        }
        return val;
    }
}


function minPathSum(grid: number[][]): number {
    const maxI = grid.length - 1;
    const maxJ = grid[0].length - 1;
    const dp = new GridDP(maxI, maxJ);
    const pathFinder = new PathFinder();

    dp.setVal(0,0, grid[0][0]);
    for(let i = 0; i<=maxI; i++){
        for(let j = 0; j<=maxJ; j++){
            if(i == 0 && j==0){
                continue;
            }
            const curVal = grid[i][j];
            const prevPath = pathFinder.getPrevPath(i,j);
            const prevVal = dp.getPrevVal(prevPath);
            dp.setVal(i,j, prevVal + curVal);
        }
    }
    
    
    return dp.getVal(maxI, maxJ);
};