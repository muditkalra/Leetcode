function numberOfSets(n: number, k: number): number {
    let mod = 10 ** 9 + 7;

    // let dp = Array.from({ length: n }, () => new Array(k + 1).fill(-1));

    // function solve(i: number, segCount: number) {
    //     if (segCount == 0) return 1;
    //     if (i >= n) return 0;

    //     if (dp[i][segCount] !== -1) {
    //         return dp[i][segCount];
    //     }

    //     let skip = solve(i + 1, segCount);
    //     let take = 0;
    //     for (let j = i + 1; j < n; j++) {
    //         take = (take + solve(j, segCount - 1)) % mod;
    //     }
    //     dp[i][segCount] = (take + skip) % mod;
    //     return (take + skip) % mod;
    // }
    // return solve(0, k);


    // optimized bottom up dp with prefix sum
    let dp = Array.from({ length: k + 1 }, () => new Array(n + 1).fill(0));
    for (let i = 0; i < n; i++) {
        dp[0][i] = 1;
    }

    for (let segCount = 1; segCount <= k; segCount++) {
        let prevRowSum = new Array(n + 1).fill(0);

        for (let i = n - 1; i >= 0; i--) {
            prevRowSum[i] = (prevRowSum[i + 1] + dp[segCount - 1][i]) % mod;
        }
        for (let i = n - 1; i >= 0; i--) {
            let skip = dp[segCount][i + 1];

            // for (let j = i + 1; j < n; j++) {
            //     take = (take + dp[segCount - 1][j]) % mod;
            // }

            let take = prevRowSum[i + 1];
            dp[segCount][i] = (take + skip) % mod;
        }
    }
    return dp[k][0];
};