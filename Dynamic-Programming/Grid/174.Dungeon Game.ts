function calculateMinimumHP(dungeon: number[][]): number {
    let m = dungeon.length;
    let n = dungeon[0].length;

    // let dp = Array.from({ length: m }, () => new Array(n).fill(-1));

    // function solve(i: number, j: number) {
    //     if (i == m - 1 && j == n - 1) {
    //         if (dungeon[i][j] < 0) {
    //             return Math.abs(dungeon[i][j]) + 1;
    //         }
    //         return 1;
    //     }

    //     if (i >= m || j >= n) {
    //         return Infinity;
    //     }

    //     if (dp[i][j] !== -1) {
    //         return dp[i][j];
    //     }

    //     let dRequired = solve(i + 1, j);
    //     let rRequired = solve(i, j + 1);
    //     let min = Math.min(dRequired, rRequired);
    //     let nextMin = min - dungeon[i][j];
    //     dp[i][j] = nextMin <= 0 ? 1 : nextMin;
    //     return dp[i][j];
    // }

    // return solve(0, 0);

    let nextRow = new Array(n).fill(0);


    for (let i = m - 1; i >= 0; i--) {
        let cur = new Array(n).fill(0);
        for (let j = n - 1; j >= 0; j--) {
            if (i == m - 1 && j == n - 1) {
                cur[j] = dungeon[m - 1][n - 1] < 0 ? Math.abs(dungeon[m - 1][n - 1]) + 1 : 1;
            } else {
                let down = Infinity;
                if (i + 1 < m) {
                    down = nextRow[j];
                }
                let right = Infinity;
                if (j + 1 < n) {
                    right = cur[j + 1];
                }

                let min = Math.min(down, right);
                let nextMin = min - dungeon[i][j];
                cur[j] = nextMin <= 0 ? 1 : nextMin;
            }
        }
        nextRow = cur;
    }

    return nextRow[0];
};