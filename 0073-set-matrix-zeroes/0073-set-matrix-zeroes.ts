/**
 Do not return anything, modify matrix in-place instead.
 */

class Virus {
    static infectX(x: number, matrix: number[][]){
        
        for(let i = 0; i<matrix.length; i++){
            matrix[i][x] = 0;
        }
    }

    static infectY(y: number, matrix: number[][]){
        for(let i = 0; i<matrix[0].length; i++){
            matrix[y][i] = 0;
        }
    }
}


function setZeroes(matrix: number[][]): void {
    const VirusXMap = new Map<number, number>();
    const VirusYMap = new Map<number, number>();
    
    for(let i = 0; i<matrix.length; i++){
        for(let j = 0; j<matrix[0].length; j++){
            if(!matrix[i][j]){
                if(!VirusXMap.has(j)){
                    VirusXMap.set(j,j);
                }
                if(!VirusYMap.has(i)){
                    VirusYMap.set(i,i);
                }
            }
        }
    }
    
    [...VirusXMap.values()].forEach(x => Virus.infectX(x, matrix));
    [...VirusYMap.values()].forEach(y => Virus.infectY(y, matrix));
};