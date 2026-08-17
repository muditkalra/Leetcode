function stoneGameV(stoneValue: number[]): number {
    let n = stoneValue.length;
    let prefixSum = new Array(n).fill(0);
    prefixSum[0] = stoneValue[0];
    let dp = Array.from({ length: n }, () => new Array(n).fill(0));

    for (let i = 1; i < n; i++) {
        prefixSum[i] = prefixSum[i - 1] + stoneValue[i];
    }


    for (let low = n - 1; low >= 0; low--) {
        for (let high = low + 1; high < n; high++) {
            let max = 0;
            for (let mid = low; mid < high; mid++) {
                let leftSum = prefixSum[mid] - (low !== 0 ? prefixSum[low - 1] : 0);
                let rightSum = prefixSum[high] - prefixSum[mid];
                let score = 0;

                if (leftSum < rightSum) {
                    score = leftSum + dp[low][mid];
                } else if (leftSum > rightSum) {
                    score = rightSum + dp[mid + 1][high];
                } else {
                    score = leftSum + Math.max(dp[low][mid], dp[mid + 1][high]);
                }
                max = Math.max(max, score);
            }
            dp[low][high] = Math.max(dp[low][high], max);
        }
    }


    // function solve(low: number, high: number) {
    //     if (low >= high) return 0;
    //     let max = 0;

    //     if (dp[low][high] !== -1) {
    //         return dp[low][high];
    //     }

    //     for (let mid = low; mid < high; mid++) {
    //         let leftSum = prefixSum[mid] - (low !== 0 ? prefixSum[low - 1] : 0);
    //         let rightSum = prefixSum[high] - prefixSum[mid];
    //         let score = 0;

    //         if (leftSum < rightSum) {
    //             score = leftSum + solve(low, mid);
    //         } else if (leftSum > rightSum) {
    //             score = rightSum + solve(mid + 1, high);
    //         } else {
    //             score = leftSum + Math.max(solve(low, mid), solve(mid + 1, high));
    //         }
    //         max = Math.max(max, score);
    //     }
    //     dp[low][high] = max;
    //     return max;
    // }
    // return solve(0,n-1);
    return dp[0][n - 1];
};