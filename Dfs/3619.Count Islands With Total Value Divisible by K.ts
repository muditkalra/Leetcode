function countIslands(grid: number[][], k: number): number {
    let m = grid.length;
    let n = grid[0].length;


    function solve(i: number, j: number): number {
        if (i == m || j == n || i < 0 || j < 0 || grid[i][j] == 0) return 0;

        let cur = grid[i][j];
        grid[i][j] = 0;
        let right = solve(i, j + 1);
        let down = solve(i + 1, j);
        let left = solve(i, j - 1);
        let up = solve(i - 1, j);
        return right + down + up + left + cur;
    }


    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] !== 0) {
                let totalValue = solve(i, j);
                count += totalValue % k == 0 ? 1 : 0;
            }
        }
    }
    return count;
};