function binarySearch(matrix: number[], target: number){
    if(matrix.length == 1){
        return matrix[0] === target;
    }
    const pivot = Math.floor(matrix.length / 2);
    if(matrix[pivot] > target){
        return binarySearch(matrix.slice(0, pivot), target);
    }
    return binarySearch(matrix.slice(pivot),target);
}

function searchMatrix(matrix: number[][], target: number): boolean {
    const flatMatrix = matrix.flat();
    
    return binarySearch(flatMatrix, target);
};