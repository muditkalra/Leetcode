function numDistinct(s: string, t: string): number {
    let n = s.length;
    let m = t.length;
    // let dp = Array.from({ length: n }, () => new Array(t.length).fill(-1));
    // function solve(i: number, j: number) {
    //     if (j == t.length) {
    //         return 1;
    //     }
    //     if (i == n) {
    //         return 0;
    //     }

    //     if (dp[i][j] !== -1) {
    //         return dp[i][j];
    //     }

    //     let take = 0;
    //     let skip = 0;

    //     if (s[i] == t[j]) {
    //         take = solve(i + 1, j + 1);
    //     }
    //     skip = solve(i + 1, j);
    //     dp[i][j] = take + skip;
    //     return take + skip;
    // }
    // return solve(0, 0);



    let dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));

    for (let i = 0; i <= n; i++) {
        dp[i][m] = 1;
    }

    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            if (s[i] == t[j]) {
                dp[i][j] += dp[i + 1][j + 1]
            }
            dp[i][j] += dp[i + 1][j];
        }
    }
    return dp[0][0];
};