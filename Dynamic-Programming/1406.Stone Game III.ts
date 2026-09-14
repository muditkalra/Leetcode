function stoneGameIII(stoneValue: number[]): string {
    let n = stoneValue.length;
    let dp = new Array(n).fill(-Infinity);
    dp[n] = 0;

    for (let i = n - 1; i >= 0; i--) {
        let currentSum = 0;
        let res = -Infinity;
        for (let j = 0; j < 3 && i + j < n; j++) {
            currentSum += stoneValue[i + j];
            dp[i] = Math.max(dp[i], currentSum - dp[i + j + 1]);
        }
    }

    return dp[0] > 0 ? "Alice" : dp[0] == 0 ? "Tie" : "Bob";


    //? dp top down 

    // function solve(i: number) {
    //     if (i >= n) return 0;

    //     if (dp[i] !== -Infinity) {
    //         return dp[i];
    //     }

    //     let take1 = -Infinity, take2 = -Infinity, take3 = -Infinity;

    //     take1 = stoneValue[i] - solve(i + 1);
    //     if (i + 1 < n) {
    //         take2 = stoneValue[i] + stoneValue[i + 1] - solve(i + 2);
    //     }
    //     if (i + 2 < n) {
    //         take3 = stoneValue[i] + stoneValue[i + 1] + stoneValue[i + 2] - solve(i + 3);
    //     }

    //     dp[i] = Math.max(take1, take2, take3);

    //     return dp[i];
    // }

    // const res = solve(0);

    // return res > 0 ? "Alice" : res == 0 ? "Tie" : "Bob";
};