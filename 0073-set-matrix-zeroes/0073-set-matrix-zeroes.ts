/**
 Do not return anything, modify matrix in-place instead.
 */

class Virus {
    infectX(x: number, matrix: number[][]){
        
        for(let i = 0; i<matrix.length; i++){
            matrix[i][x] = 0;
        }
    }

    infectY(y: number, matrix: number[][]){
        for(let i = 0; i<matrix[0].length; i++){
            matrix[y][i] = 0;
        }
    }
}


function setZeroes(matrix: number[][]): void {
    const VirusXSet = new Set<number>();
    const VirusYSet = new Set<number>();
    
    for(let i = 0; i<matrix.length; i++){
        for(let j = 0; j<matrix[0].length; j++){
            if(!matrix[i][j]){
                VirusXSet.add(j);
                VirusYSet.add(i);
            }
        }
    }
    const virus = new Virus();
    for(const x of VirusXSet.values()){
        virus.infectX(x, matrix);
    }
    for(const y of VirusYSet.values()){
        virus.infectY(y, matrix);
    }
    
};