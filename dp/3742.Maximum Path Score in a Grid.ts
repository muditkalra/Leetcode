function maxPathScore(grid: number[][], k: number): number {
    let dir = [[1, 0], [0, 1]];
    let m = grid.length;
    let n = grid[0].length;

    let dp = Array.from({ length: m }, () => Array.from({ length: n }, () => new Array(k + 1).fill(Infinity)));

    function solve(x: number, y: number, totalCost: number) {
        if (totalCost > k) return -1;
        if (x == m - 1 && y == n - 1) {
            return grid[x][y]; // [score, cost]
        }

        if (dp[x][y][totalCost] !== Infinity) {
            return dp[x][y][totalCost];
        }

        let max = -1;

        for (const [dx, dy] of dir) {
            let newX = x + dx;
            let newY = y + dy;
            if (newX < m && newY < n && newX >= 0 && newY >= 0) {
                let newCost = totalCost + (grid[newX][newY] == 0 ? 0 : 1);
                let nextScore = solve(newX, newY, newCost);
                max = Math.max(max, nextScore !== -1 ? nextScore + grid[x][y] : -1);
            }
        }
        dp[x][y][totalCost] = max;
        return dp[x][y][totalCost];
    }

    return solve(0, 0, 0);
};


// bottom-up dp

// function maxPathScore(grid: number[][], k: number): number {
//     let dir = [[1, 0], [0, 1]];
//     let m = grid.length;
//     let n = grid[0].length;

//     let dp = Array.from({ length: m }, () => Array.from({ length: n }, () => new Array(k + 1).fill(-1)));

//     dp[0][0][0] = 0;

//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             for (let c = 0; c <= k; c++) {
//                 let prevCost = c - (grid[i][j] == 0 ? 0 : 1);
//                 if (prevCost < 0) continue;

//                 if (i == 0 && j == 0) {
//                     dp[i][j][c] = 0;
//                     continue;
//                 }

//                 let best = -1;

//                 if (i > 0 && dp[i - 1][j][prevCost] !== -1) {
//                     best = Math.max(best, dp[i - 1][j][prevCost] + grid[i][j]);
//                 }

//                 if (j > 0 && dp[i][j - 1][prevCost] !== -1) {
//                     best = Math.max(best, dp[i][j - 1][prevCost] + grid[i][j]);
//                 }

//                 dp[i][j][c] = best;
//             }
//         }
//     }


//     let max = -1;
//     for (let i = 0; i <= k; i++) {
//         max = Math.max(max, dp[m - 1][n - 1][i]);
//     }
//     return max;
// };

