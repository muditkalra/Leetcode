function cherryPickup(grid: number[][]): number {
    let n = grid.length;
    let m = grid[0].length;
    let dir = [-1, 0, 1];
    // let dp = Array.from({ length: row }, () => Array.from({ length: col }, () => new Array(col).fill(-1)));

    // function solve(i: number, j1: number, j2: number) {
    //     if (j1 < 0 || j1 >= col || j2 < 0 || j2 >= col) {
    //         return -Infinity;
    //     }

    //     if (i == row - 1) {
    //         if (j1 == j2) return grid[i][j1];
    //         return grid[i][j1] + grid[i][j2];
    //     }

    //     if (dp[i][j1][j2] !== -1) {
    //         return dp[i][j1][j2];
    //     }

    //     let max = 0;
    //     for (let d1y of dir) {
    //         for (let d2y of dir) {
    //             if (j1 == j2) {
    //                 max = Math.max(max, grid[i][j1] + solve(i + 1, j1 + d1y, j2 + d2y));
    //             } else {
    //                 max = Math.max(max, grid[i][j1] + grid[i][j2] + solve(i + 1, j1 + d1y, j2 + d2y));
    //             }
    //         }
    //     }
    //     dp[i][j1][j2] = max;
    //     return max;
    // }
    // return solve(0, 0, col - 1);

    let dp = Array.from({ length: n }, () => Array.from({ length: m }, () => new Array(m).fill(0)));

    for (let j1 = 0; j1 < m; j1++) {
        for (let j2 = 0; j2 < m; j2++) {
            if (j1 == j2) {
                dp[n - 1][j1][j2] = grid[n - 1][j1];
            } else {
                dp[n - 1][j1][j2] = grid[n - 1][j1] + grid[n - 1][j2];
            }
        }
    }

    function isValid(j1: number, j2: number) {
        return j1 >= 0 && j1 < m && j2 >= 0 && j2 < m;
    }

    for (let i = n - 2; i >= 0; i--) {
        for (let j1 = 0; j1 < m; j1++) {
            for (let j2 = 0; j2 < m; j2++) {
                let max = 0;
                for (let d1y of dir) {
                    for (let d2y of dir) {
                        if (j1 == j2) {
                            max = Math.max(max, grid[i][j1] + (isValid(j1 + d1y, j2 + d2y) ? dp[i + 1][j1 + d1y][j2 + d2y] : 0));
                        } else {
                            max = Math.max(max, grid[i][j1] + grid[i][j2] + (isValid(j1 + d1y, j2 + d2y) ? dp[i + 1][j1 + d1y][j2 + d2y] : 0));
                        }
                    }
                }
                dp[i][j1][j2] = max;
            }
        }
    }
    return dp[0][0][m - 1];
};