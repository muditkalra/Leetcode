function maxPalindromes(s: string, k: number): number {
    let n = s.length;
    if (k == 1) return n;

    // preprocessing to create palindrome checks

    let isPalindrome = Array.from({ length: n }, () => new Array(n).fill(false));
    for (let l = 1; l <= n; l++) {
        for (let i = 0; i + l <= n; i++) {
            let j = i + l - 1;
            if (i == j) { // 1 length string are palindrome;
                isPalindrome[i][j] = true;
            } else if (i + 1 == j) { // two length string are only palindrome if both char match
                isPalindrome[i][j] = s[i] == s[j];
            } else {
                isPalindrome[i][j] = s[i] == s[j] && isPalindrome[i + 1][j - 1];
            }
        }
    }

    let dp = Array.from({ length: n }, () => new Array(n).fill(-1));
    function solve(i: number, j: number): number {
        if (i >= n || j >= n) {
            return 0;
        }

        if (dp[i][j] !== -1) {
            return dp[i][j];
        }

        if (isPalindrome[i][j]) {
            let take = 1 + solve(j + 1, j + k);
            let grow = solve(i, j + 1);
            let slide = solve(i + 1, j + 1);
            dp[i][j] = Math.max(take, grow, slide);
            return Math.max(take, grow, slide);
        }
        let grow = solve(i, j + 1);
        let slide = solve(i + 1, j + 1);
        dp[i][j] = Math.max(grow, slide);
        return Math.max(grow, slide);
    }
    return solve(0, k - 1);

    // let dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));

    // for (let i = n - 1; i >= 0; i--) {
    //     for (let j = n - 1; j >= 0; j--) {
    //         if (isPalindrome[i][j]) {
    //             let take = 1;
    //             if (j + k <= n) {
    //                 take += dp[j + 1][j + k];
    //             }
    //             let grow = 0;
    //             if (j + 1 <= n) {
    //                 grow = dp[i][j + 1];
    //             }
    //             let slide = 0;
    //             if (i + 1 <= n && j + 1 <= n) {
    //                 slide = dp[i + 1][j + 1];
    //             }
    //             dp[i][j] = Math.max(take, grow, slide);
    //         }
    //         let grow = 0;
    //         if (j + 1 <= n) {
    //             grow = dp[i][j + 1];
    //         }

    //         let slide = 0;
    //         if (i + 1 <= n && j + 1 <= n) {
    //             slide = dp[i + 1][j + 1];
    //         }
    //         dp[i][j] = Math.max(dp[i][j], grow, slide);
    //     }
    // }
    // return dp[0][k - 1];
};