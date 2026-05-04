/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    let n = matrix.length;

    // To rotate image 90 clockwise, we will transpose and then interchange columns

    // 1. transpose
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    // 2. then interchange column: 0 col will go to n-1 pos and 1 with goto (n-1)-1 pos
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }

};