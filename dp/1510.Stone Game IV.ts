function winnerSquareGame(n: number): boolean {
    let dp = new Array(n + 1).fill(-1);
    function solve(n: number) {
        if (n == 0) return false;
        if (dp[n] !== -1) return dp[n];

        for (let x = 1; x * x <= n; x++) {
            if (!solve(n - x * x)) {
                dp[n] = true;
                return true;
            }
        }
        dp[n] = false;
        return false;
    }
    return solve(n);
};