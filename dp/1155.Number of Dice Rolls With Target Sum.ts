function numRollsToTarget(n: number, k: number, target: number): number {
    const MOD = 1e9 + 7;

    // let dp = Array.from({ length: n + 1 }, () => new Array(target + 1).fill(-1));

    // function solve(dice: number, remSum: number) {
    //     if (dice == 1) {
    //         return remSum <= k ? 1 : 0;
    //     }

    //     if (dp[dice][remSum] !== -1) {
    //         return dp[dice][remSum];
    //     }

    //     let res = 0;
    //     let max = remSum > k ? k : remSum - 1;
    //     for (let i = 1; i <= max; i++) {
    //         res = (res + solve(dice - 1, remSum - i)) % MOD;
    //     }
    //     dp[dice][remSum] = res;
    //     return res;
    // }
    // return solve(n, target);


    let prev = new Array(target + 1).fill(0);
    prev[0] = 1;

    for (let dice = 1; dice <= n; dice++) {
        let cur = new Array(target + 1).fill(0);
        let window = 0;

        for (let sum = 1; sum <= target; sum++) {
            window = (window + prev[sum - 1]) % MOD;

            if (sum - k - 1 >= 0) {
                window = (window - prev[sum - k - 1] + MOD) % MOD;
            }

            cur[sum] = window;
        }

        prev = cur;
    }

    return prev[target];
};