function createDirection(ij:[number,number],leny:number, lenx:number){
    const arr = [];
    if(ij[0] - 1 >= 0){
        arr.push([ij[0] - 1, ij[1]]);
    }
    if(ij[0] + 1 < leny){
        arr.push([ij[0] + 1, ij[1]])
    }
    if(ij[1] - 1 >= 0){
        arr.push([ij[0], ij[1] - 1])
    }
    if(ij[1] + 1 <lenx){
        arr.push([ij[0], ij[1] + 1]);
    }
    return arr;
}

function bfs(grid:string[][], i:number, j:number, visited:boolean[][]){
    const que:[number,number][] = [];
    que.push([i,j]);
    visited[i][j] = true;
    while(que.length){
        const ij = que.pop();
        // console.log(visited);
        const direct = createDirection(ij, grid.length, grid[0].length);
        for(let i = 0; i<direct.length; i++){
            const d = direct[i];
            if(grid[d[0]][d[1]] === '1' && !visited[d[0]][d[1]]){
                visited[d[0]][d[1]] = true;
                que.push([d[0],d[1]]);
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
                bfs(grid, i,j,visited)
            }
        }
    }
    return count;
    
};