function predictTheWinner(nums: number[]): boolean {

    let n = nums.length;
    let dp = Array.from({ length: 23 }, () => new Array(23).fill(-1));

    function solve(left: number, right: number) {
        if (left == right) {
            return nums[left];
        };

        if (dp[left][right] !== -1) {
            return dp[left][right];
        }

        let takeLeft = nums[left] - solve(left + 1, right)
        let takeRight = nums[right] - solve(left, right - 1);
        dp[left][right] = Math.max(takeLeft, takeRight);
        return dp[left][right];
    }
    return solve(0, n - 1) >= 0;
};