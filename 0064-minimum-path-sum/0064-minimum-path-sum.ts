


function minPathSum(grid: number[][]): number {
    const maxI = grid.length - 1;
    const maxJ = grid[0].length - 1;
    const dp = [];
    for(let i = 0; i<=maxI; i++){
        dp.push(new Array(maxJ + 1).fill(0))
    }

    dp[0][0] = grid[0][0];
    for(let i = 0; i<=maxI; i++){
        for(let j = 0; j<=maxJ; j++){
            if(i == 0 && j==0){
                continue;
            }
            const curVal = grid[i][j];
            const prevVal = getPrevVal(dp, i,j);
            dp[i][j] = prevVal + curVal;
        }
    }
    
    
    return dp[maxI][maxJ];
};

function getPrevVal(dp:number[][], i: number, j: number){
    if(j - 1 < 0){
        return dp[i-1][j];
    }
    
    if(i - 1 < 0){
        return dp[i][j -1];
    }
    
    return Math.min(dp[i - 1][j], dp[i][j-1]);
}