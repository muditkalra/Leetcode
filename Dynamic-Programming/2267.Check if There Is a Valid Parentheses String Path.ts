function hasValidPath(grid: string[][]): boolean {
    let m = grid.length;
    let n = grid[0].length;

    let dp = Array.from({ length: m }, () => Array.from({ length: n }, () => new Array(m + n).fill(false)));

    if (grid[0][0] == ')' || grid[m - 1][n - 1] == '(') return false;

    if ((m + n - 1) % 2) return false;

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            for (let openCount = 0; openCount <= i + j + 1; openCount++) {
                if (i == m - 1 && j == n - 1) {
                    dp[i][j][openCount] = openCount == 0;
                    continue;
                }

                if (i + 1 < m) {
                    let nextCount = grid[i + 1][j] == "(" ? openCount + 1 : openCount - 1;
                    if (nextCount >= 0 && dp[i + 1][j][nextCount] == true) {
                        dp[i][j][openCount] = true;
                    }
                }

                if (j + 1 < n) {
                    let nextCount = grid[i][j + 1] == "(" ? openCount + 1 : openCount - 1;
                    if (nextCount >= 0 && dp[i][j + 1][nextCount] == true) {
                        dp[i][j][openCount] = true;
                    }
                }
            }
        }
    }

    return dp[0][0][1];


    // function solve(i: number, j: number, diff: number) {
    //     if (i >= m || j >= n) return false;

    //     diff = grid[i][j] == '(' ? diff + 1 : diff - 1;

    //     if (diff < 0) {
    //         return false;
    //     }

    //     if (i == m - 1 && j == n - 1) {
    //         return diff == 0;
    //     }

    //     if (dp[i][j][diff] !== -1) {
    //         return dp[i][j][diff];
    //     }

    //     let down = solve(i + 1, j, diff);
    //     let right = solve(i, j + 1, diff);

    //     dp[i][j][diff] = down || right;
    //     return down || right;
    // }
    // return solve(0, 0, 0);
};