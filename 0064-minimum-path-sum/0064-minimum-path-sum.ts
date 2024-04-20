
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
        
    }
}


function minPathSum(grid: number[][]): number {
    const maxI = grid.length - 1;
    const maxJ = grid[0].length - 1;
    const dp = new GridDP(maxI, maxJ);

    dp.setVal(0,0, grid[0][0]);
    for(let i = 0; i<=maxI; i++){
        for(let j = 0; j<=maxJ; j++){
            if(i == 0 && j==0){
                continue;
            }
            const curVal = grid[i][j];
            const prevVal = getPrevVal(dp, i,j);
            dp.setVal(i,j, prevVal + curVal);
        }
    }
    
    
    return dp.getVal(maxI, maxJ);
};

function getPrevVal(dp:GridDP, i: number, j: number){
    if(j - 1 < 0){
        return dp.getVal(i-1, j);
    }
    
    if(i - 1 < 0){
        return dp.getVal(i, j -1);
    }
    
    return Math.min(dp.getVal(i - 1, j), dp.getVal(i,j-1));
}