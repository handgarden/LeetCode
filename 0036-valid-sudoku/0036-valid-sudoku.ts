function isValidSudoku(board: string[][]): boolean {
    //스도쿠가 될 수 없는 경우
    //1. 수평선에 동일한 숫자 2개 들어간 경우
    //2. 수직선에 동일한 숫자 2개 들어간 경우
    //3. 3x3박스에 동일한 숫자가 2개 들어간 경우
    for(let i = 0; i<9;i++){
        let visited: boolean[] = [false];
        let visited2: boolean[] = [false];
        for(let j = 1; j<=9;j++){
            visited.push(false);
            visited2.push(false);
        }
        for(let j = 0; j<9;j++){
            let num = parseInt(board[i][j]);
            let num2 = parseInt(board[j][i]);
            if(!isNaN(num)){
                if(visited[num]){
                    console.log(1,i,j,num, visited[num ? num:0]);
                    return false;   
                }
                visited[num] = true;
                
            }
            if(!isNaN(num2)){
                if(visited2[num2]){
                    console.log(2,j,i,num2, visited2[num2 ? num2:0]);
                    return false;   
                }
                visited2[num2] = true;
                
            }
        }
    }
    for(let i = 0; i<3;i++){
        for(let j = 0; j<3;j++){
            let x = i * 3;
            let y = j * 3;
            let visited: boolean[] = [false];
            for(let j = 1; j<=9;j++){
                visited.push(false);
            }
            for(let t = x; t<x+3;t++){
                for(let k = y; k<y+3;k++){
                    let num = parseInt(board[t][k]);
                    if(!isNaN(num)){
                        if(visited[num]){
                            console.log(3,t,k, num, visited[num ? num:0]);
                            return false;
                        }
                        visited[num] = true;
                    }
                }
            }
        }
    }
    return true;
};