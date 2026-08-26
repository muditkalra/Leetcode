function rob(nums: number[]): number {
    let n = nums.length;

    // space optimised bottom up

    let prev2 = 0;
    let prev = 0;

    for (let i = n - 1; i >= 0; i--) {
        let take = nums[i] + prev2;
        let skip = prev;
        let cur = Math.max(skip, take);
        prev2 = prev;
        prev = cur;
    }
    return prev;


    // bottom up
    
    // let dp = new Array(n + 2).fill(-1);
    // dp[n + 1] = 0;
    // dp[n] = 0;

    // for (let i = n - 1; i >= 0; i--) {
    //     let take = nums[i] + dp[i + 2];
    //     let skip = dp[i + 1];
    //     dp[i] = Math.max(skip, take);
    // }
    // return dp[0];

    // top down

    // let dp = new Array(n + 2).fill(-1);
    // function solve(i: number) {
    //     if (i >= n) return 0;

    //     if (dp[i] !== -1) {
    //         return dp[i];
    //     }

    //     let take = nums[i] + solve(i + 2);
    //     let skip = solve(i + 1);
    //     dp[i] = Math.max(skip, take);
    //     return dp[i];
    // }
    // return solve(0);
};