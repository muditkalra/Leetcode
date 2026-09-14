// Idea: 
// The index 0 adn index n-1 cannot be taken together so this creates two case
// 1. where will take index 0 and not take index n-1
// 2. where will not take index 0 and take index n-1
// Each case then will be similar to house robber I
 

function rob(nums: number[]): number {
    let n = nums.length;
    if (n == 1) return nums[0];

    function calculate(first: number, last: number) {
        // space optimized bottom up
        let prev2 = 0;
        let prev = 0;
        
        for (let i = last - 1; i >= first; i--) {
            let take = nums[i] + prev2;
            let skip = prev;
            let cur = Math.max(skip, take);
            prev2 = prev;
            prev = cur;
        }
        return prev;
        
        // top down
        // let dp = new Array(last + 2).fill(-1);
        // function solve(i: number) {
        //     if (i >= last) return 0;

        //     if (dp[i] !== -1) {
        //         return dp[i];
        //     }

        //     let take = nums[i] + solve(i + 2);
        //     let skip = solve(i + 1);
        //     dp[i] = Math.max(skip, take);
        //     return dp[i];
        // }
        // return solve(first);
    }
    return Math.max(calculate(0, n - 1), calculate(1, n))
}; 