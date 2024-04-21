function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const dp: number[][] = [];
    const maxI = obstacleGrid.length - 1;
    const maxJ = obstacleGrid[0].length - 1;
    for(let i = 0; i <= maxI; i++){
        dp.push(new Array(maxJ + 1).fill(0));
    }
    
    dp[0][0] = obstacleGrid[0][0] ? 0 : 1;
    for(let i = 0; i<=maxI; i++){
        for(let j = 0; j<=maxJ; j++){
            if(i == 0 && j==0){
                continue;
            }
            if(!!obstacleGrid[i][j]){
                continue;
            }
            let curVal = 0;
            if(j-1 >= 0){
                curVal+= dp[i][j-1];            
            }
            if(i-1 >= 0){
                curVal+=dp[i-1][j];
            }
            dp[i][j] = curVal;
        }
    }
    return dp[maxI][maxJ];
};