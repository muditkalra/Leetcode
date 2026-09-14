function maximumAmount(coins: number[][]): number {
    let m = coins.length;
    let n = coins[0].length;

    let dp = Array.from({ length: m }, () => Array.from({ length: n }, () => new Array(3).fill(null)));

    function dfs(i: number, j: number, k: number) {
        if (i >= m || j >= n) {
            return -Infinity;
        }


        if (i === m - 1 && j === n - 1) {
            if (coins[i][j] < 0 && k > 0) return 0; // neutralize
            return coins[i][j];
        }


        if (dp[i][j][k] !== null) {
            return dp[i][j][k];
        }

        let take = coins[i][j] + Math.max(dfs(i + 1, j, k), dfs(i, j + 1, k));
        let skip = -Infinity;
        if (coins[i][j] < 0 && k > 0) {
            let down2 = dfs(i + 1, j, k - 1);
            let right2 = dfs(i, j + 1, k - 1);
            skip = Math.max(down2, right2);
        }
        let res = Math.max(take, skip);

        dp[i][j][k] = res;
        return res;
    }

    return dfs(0, 0, 2);
}