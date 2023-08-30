function bfs(grid:string[][], i:number, j:number, visited:boolean[][]){
    const que:[number,number][] = [];
    que.push([i,j]);
    visited[i][j] = true;
    while(que.length){
        const ij = que.pop();
        // console.log(visited);
        const i = ij[0];
        const j = ij[1];
        if(i - 1 >= 0){
            if(grid[i - 1][j] === '1' && !visited[i - 1][j]){
                visited[i - 1][j] = true;
                que.push([i-1,j]);
            }
        }
        if(i + 1 < grid.length){
            if(grid[i+1][j] === '1' && !visited[i+1][j]){
                visited[i+1][j] = true;
                que.push([i+1,j]);
            }
        }
        if(j - 1 >= 0){
            if(grid[i][j-1] === '1' && !visited[i][j- 1]){
                visited[i][j-1] = true;
                que.push([i,j-1]);
            }
        }
        if(j + 1 < grid[0].length){
            if(grid[i][j + 1] === '1' && !visited[i][j+ 1]){
                visited[i][j+1] = true;
                que.push([i,j+1]);
            }
        }
    }
}


function numIslands(grid: string[][]): number {
    if(grid.length < 1){
        return 0;
    }
    const lenx = grid[0].length;
    const leny = grid.length;
    const visited = [];
    for(let i = 0; i< leny;i++){
        const arr = [];
        for(let j = 0; j<lenx; j++){
            arr.push(false);
        }
        visited.push(arr);
    }
    
    let count = 0;
    for(let i = 0 ; i<leny;i++){
        for(let j = 0; j<lenx;j++){
            // console.log(i,j,visited[i][j],grid[i][j]);
            if(!visited[i][j] && grid[i][j] === '1'){
                count++;
                // console.log(count);
                bfs(grid, i,j,visited)
            }
        }
    }
    return count;
    
};