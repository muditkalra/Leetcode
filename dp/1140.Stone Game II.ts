function stoneGameII(piles: number[]): number {
    let n = piles.length;
    let suffixSum = new Array(n + 1).fill(0);
    let dp = Array.from({ length: n }, () => Array(n + 1).fill(-1));;

    for (let i = n - 1; i >= 0; i--) {
        suffixSum[i] = piles[i] + suffixSum[i + 1];
    }

    function solve(i: number, m: number) {
        if (i + 2 * m >= n) return suffixSum[i];

        if (dp[i][m] !== -1) {
            return dp[i][m];
        }

        let max = 0;

        for (let x = 1; x <= 2 * m; x++) {
            let nextI = i + x;
            let nextM = Math.max(x, m);

            let currentPlayerScore = suffixSum[i] - solve(nextI, nextM);
            max = Math.max(max, currentPlayerScore);
        }
        dp[i][m] = max;
        return max;
    }
    return solve(0, 1);
};