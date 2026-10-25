function closedIsland(grid: number[][]): number {
    let m = grid.length;
    let n = grid[0].length;


    function solve(i: number, j: number): boolean {
        if (i == m || j == n || i < 0 || j < 0) {
            return false;
        }

        if (grid[i][j] == 1) return true;

        grid[i][j] = 1;

        let right = solve(i, j + 1);

        let down = solve(i + 1, j);

        let left = solve(i, j - 1);

        let up = solve(i - 1, j);

        return left && up && down && right;
    }


    let cur = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 0 && solve(i, j)) {
                cur++;
            }
        }
    }
    return cur;
};