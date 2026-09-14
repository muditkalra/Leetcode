function stoneGameVIII(stones: number[]): number {
    let n = stones.length;
    let prefixSum = new Array(n).fill(0);
    prefixSum[0] = stones[0];

    for (let i = 1; i < n; i++) {
        prefixSum[i] = prefixSum[i - 1] + stones[i];
    }

    let maxScore = prefixSum[n - 1]; // it was 1-d dp before space optimization let maxScore[n-1] = prefixSum[n-1]

    for (let i = n - 2; i >= 1; i--) {
        let take = prefixSum[i] - maxScore;
        let skip = maxScore;
        maxScore = Math.max(take, skip);
    }
    return maxScore;

    // function solve(i: number) {
    //     if (i == n - 1) return prefixSum[n - 1];
    //     let take = prefixSum[i] - solve(i + 1);
    //     let skip = solve(i + 1);
    //     let max = Math.max(take, skip);
    //     return max;
    // }
    // return solve(1);
};