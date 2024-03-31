/**
 Do not return anything, modify matrix in-place instead.
 */
class Index {
    x: number;
    y: number;
    constructor(x:number, y: number){
        this.x = x;
        this.y = y;
    }

}

class Virus {
    index: Index;
    matrix: number[][];

    constructor(index: Index, matrix: number[][]){
        this.index = index;
        this.matrix = matrix;
    }

    infect(){
        const x = this.index.x;
        const y = this.index.y;
        
        for(let i = 0; i<this.matrix[0].length; i++){
            this.matrix[y][i] = 0;
        }
        
        for(let i = 0; i<this.matrix.length;i++){
            this.matrix[i][x] = 0;
        }
    }
}

function setZeroes(matrix: number[][]): void {
    const virusQue: Virus[] = [];
    
    for(let i = 0; i<matrix.length; i++){
        for(let j = 0; j<matrix[0].length; j++){
            if(!matrix[i][j]){
                virusQue.push(new Virus(new Index(j,i), matrix));
            }
        }
    }
    
    while(virusQue.length){
        const virus = virusQue.pop();
        virus.infect();
    }
};