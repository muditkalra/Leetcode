function shiftGrid(grid: number[][], k: number): number[][] {
    let m = grid.length;
    let n = grid[0].length;
    let total = m * n;
    k = k % total;
    if (k === 0) return grid;

    let res = Array.from({ length: m }, () => new Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {

            let oneDIdx = (i * n) + j;
            let newIdx = (oneDIdx + k) % total;
            let newX = Math.floor(newIdx / n);
            let newY = newIdx % n;

            res[newX][newY] = grid[i][j];
        }
    }
    return res
};