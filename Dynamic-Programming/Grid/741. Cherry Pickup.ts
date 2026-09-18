function cherryPickupI(grid: number[][]): number {
    let n = grid.length;

    function isValid(r1: number, r2: number, c1: number, c2: number) {
        const check = r1 < n && r2 < n && c1 < n && c2 < n;
        console.log({ r1, r2, c1, c2, check });
        return check;
    }

    // let dp = Array.from({ length: n }, () => Array.from({ length: n }, () => new Array(n).fill(-1)));

    // function solve(r1: number, c1: number, c2: number) {
    //     const r2 = r1 + c1 - c2;
    //     if ((r1 == n - 1 && c1 == n - 1) || (r2 == n - 1 && c2 == n - 1)) {
    //         return grid[n - 1][n - 1];
    //     }

    //     if (!isValid(r1, r2, c1, c2) || grid[r1][c1] == -1 || grid[r2][c2] == -1) {
    //         return -Infinity;
    //     }

    //     if (dp[r1][c1][c2] !== -1) {
    //         return dp[r1][c1][c2];
    //     }

    //     let cur = grid[r1][c1];
    //     if (r1 !== r2 || c1 !== c2) {
    //         cur += grid[r2][c2];
    //     }

    //     //case1: person 1 goes down, person 2 goes down
    //     let case1 = solve(r1 + 1, c1, c2);
    //     // case2: person 1 goes down, person 2 goes right
    //     let case2 = solve(r1 + 1, c1, c2 + 1);
    //     // case3: person 1 goes right, person 2 goes down
    //     let case3 = solve(r1, c1 + 1, c2);
    //     // case4: person 1 goes right, person 2 goes right;
    //     let case4 = solve(r1, c1 + 1, c2 + 1);

    //     const max = Math.max(case1, case2, case3, case4);
    //     dp[r1][c1][c2] = max + cur;
    //     return max + cur;
    // }
    // const result = solve(0, 0, 0);
    // return result <= 0 ? 0 : result;


    function check(r2: number) {
        return r2 >= 0 && r2 < n;
    }


    let dp = Array.from({ length: n }, () => Array.from({ length: n }, () => new Array(n).fill(-Infinity)));

    dp[n - 1][n - 1][n - 1] = grid[n - 1][n - 1];

    for (let r1 = n - 1; r1 >= 0; r1--) {
        for (let c1 = n - 1; c1 >= 0; c1--) {
            for (let c2 = n - 1; c2 >= 0; c2--) {
                if (r1 == n - 1 && c1 == n - 1 && c2 == n - 1) continue;

                let r2 = r1 + c1 - c2;

                if (r2 < 0 || r2 >= n || grid[r1][c1] == -1 || grid[r2][c2] == -1) continue;


                let cur = grid[r1][c1];

                if ((r1 !== r2 || c1 !== c2)) {
                    cur += grid[r2][c2];
                }

                //case1: person 1 goes down, person 2 goes down
                let case1 = -Infinity;
                if (r1 + 1 < n) {
                    case1 = dp[r1 + 1][c1][c2];
                }

                // case2: person 1 goes down, person 2 goes right
                let case2 = -Infinity;
                if (r1 + 1 < n && c2 + 1 < n) {
                    case2 = dp[r1 + 1][c1][c2 + 1];
                }

                // case3: person 1 goes right, person 2 goes down
                let case3 = -Infinity;
                if (c1 + 1 < n) {
                    case3 = dp[r1][c1 + 1][c2];
                }

                // case4: person 1 goes right, person 2 goes right;
                let case4 = -Infinity;
                if (c1 + 1 < n && c2 + 1 < n) {
                    case4 = dp[r1][c1 + 1][c2 + 1];
                }

                const max = Math.max(case1, case2, case3, case4);
                dp[r1][c1][c2] = max + cur;
                console.log({ r1, c1, c2, max }, dp[r1][c1][c2]);
            }
        }
    }
    return dp[0][0][0];
};