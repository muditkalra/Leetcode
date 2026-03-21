function reverseSubmatrix(grid: number[][], x: number, y: number, k: number): number[][] {
    let midRow = Math.floor(k / 2);
    let endRow = x + k - 1;

    for (let i = x; i < midRow; i++) {
        for (let j = y; j < k; j++) {
            let temp = grid[x + i][y + j];
            grid[x + i][y + j] = grid[endRow - i][y + j];
            grid[endRow - i][y + j] = temp;
        }
    }

    return grid;
};