class Index{
    i: number;
    j: number;
    constructor(i: number, j: number){
        this.i = i;
        this.j = j;
    }

    getLeft(){
        if(this.j-1 < 0){
            return null;
        }
        return new Index(this.i, this.j - 1);
    }

    getUp(){
        if(this.i - 1 < 0){
            return null;
        }
        return new Index(this.i-1, this.j);
    }

    getPrevIndex(){
        const prev:Index[] = [];
        const left = this.getLeft();
        if(left){
            prev.push(left);
        }
        
        const up = this.getUp();
        if(up){
            prev.push(up);
        }
        
        return prev;
    }
}

function isObstacle(grid: number[][], index: Index){
    return !!grid[index.i][index.j];
}

function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const dp: number[][] = [];
    const maxIndex = new Index(obstacleGrid.length - 1, obstacleGrid[0].length - 1);
    for(let i = 0; i<=maxIndex.i; i++){
        dp.push(new Array(maxIndex.j+1).fill(0));
    }
    
    dp[0][0] = obstacleGrid[0][0] ? 0 : 1;
    for(let i = 0; i<=maxIndex.i; i++){
        for(let j = 0; j<=maxIndex.j;j++){
            if(i == 0 && j==0){
                continue;
            }
            const curIndex = new Index(i,j);
            if(isObstacle(obstacleGrid, curIndex)){
                continue;
            }
            const prevIndex = curIndex.getPrevIndex();
            let curVal = 0;
            prevIndex.forEach(p => {
                if(isObstacle(obstacleGrid, p)){
                    return;
                }
                curVal += dp[p.i][p.j];
            })
            dp[curIndex.i][curIndex.j] = curVal;
        }
    }
    return dp[maxIndex.i][maxIndex.j]
};