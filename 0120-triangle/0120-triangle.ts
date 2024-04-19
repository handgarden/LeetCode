function minimumTotal(triangle: number[][]): number {
    const sums = [[triangle[0][0]]];
    for(let i = 1; i<triangle.length; i++){
        sums.push([]);
        for(let j = 0; j<triangle[i].length; j++){
            let prevSum = Number.MAX_SAFE_INTEGER;
            if(j - 1 >= 0){
                prevSum = Math.min(prevSum, sums[i-1][j-1])
            }
            if(j < triangle[i-1].length){
                prevSum = Math.min(prevSum, sums[i-1][j]);
            }
            sums[i].push(triangle[i][j] + prevSum);
        }
    }
    return Math.min(...sums[triangle.length-1]);
};
