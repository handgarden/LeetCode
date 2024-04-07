/**
 Do not return anything, modify board in-place instead.
 */

class Direction {
    x: number;
    y: number;
    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }
}

class Adjacent{
    private directions = [
        new Direction(0, 1),
        new Direction(0, -1),
        new Direction(1, 0),
        new Direction(-1,0),
        new Direction(1, -1),
        new Direction(1, 1),
        new Direction(-1, 1),
        new Direction(-1, -1),
    ];
    private maxIndex: Direction;
    
    constructor(maxDirection: Direction){
        this.maxIndex = maxDirection;
    }

    private isIn(index: Direction){
        const x = index.x;
        const y = index.y;
        
        if(x < 0 || x >= this.maxIndex.x){
            return false;
        }
        
        if(y < 0 || y >= this.maxIndex.y){
            return false;
        }
        
        return true;
    }

    getAdj(x: number, y: number){
        return this.directions.filter(d => {
            const newX = d.x + x;
            const newY = d.y + y;
            const newIndex = new Direction(newX, newY);
            return this.isIn(newIndex);
        }).map(a => new Direction(a.x + x, a.y + y));
    }
}

class Board {
    adjecent: Adjacent;
    matrix: number[][];
    constructor(matrix:number[][]){
        this.matrix = matrix;
        this.adjecent = new Adjacent(new Direction(matrix[0].length, matrix.length));
    }

    public updateState(index: Direction, value: number){
        this.matrix[index.y][index.x] = value;
    }

    public getNextState(index: Direction){
        const adjs = this.adjecent.getAdj(index.x, index.y);
        if(this.matrix[index.y][index.x]){
            if(this.firstRule(adjs)){
                return 0;
            }
            if(this.secondRule(adjs)){
                return 1;
            }
            if(this.thirdRule(adjs)){
                return 0;
            }
        }else{
            if(this.forthRule(adjs)){
                return 1;
            }
        }
        
        return this.matrix[index.y][index.x];
        
    }

    private firstRule(adjs: Direction[]){
        const lived = adjs.filter(a => !!this.matrix[a.y][a.x]).length;
        if(lived < 2){
            return true;
        }
        return false;
    }
    
    private secondRule(adjs: Direction[]){
        const lived = adjs.filter(a => !!this.matrix[a.y][a.x]).length;
        if(lived === 2 || lived === 3){
            return true;
        }
        return false;
    }
    
    private thirdRule(adjs: Direction[]){
        const live = adjs.filter(a => !!this.matrix[a.y][a.x]).length;
        if(live > 3){
            return true;
        }
        return false;
    }

    private forthRule(adjs: Direction[]){
        const lived = adjs.filter(a => {
            return !!this.matrix[a.y][a.x];
        }).length;
        if(lived === 3){
            return true;
        }
        return false;
    }
}

function gameOfLife(board: number[][]): void {
    const currentBoard = new Board(board);
    const updatedBoard = new Board(new Array(board.length)
                                   .fill(0)
                                   .map(_ => new Array(board[0].length).fill(0)));
    const maxX = board[0].length;
    const maxY = board.length;
    for(let y = 0; y < maxY; y++){
        for(let x = 0; x<maxX; x++){
            const index = new Direction(x,y);
            const nextState = currentBoard.getNextState(index);
            updatedBoard.updateState(index,nextState);
        }
    } 
    for(let y = 0; y < maxY; y++){
        for(let x = 0; x<maxX; x++){
            currentBoard.matrix[y][x] = updatedBoard.matrix[y][x];
        }
    } 
};