function maxSelectedElements(nums: number[]): number {
    let n = nums.length;
    nums.sort((a, b) => a - b);

    function binarySearch(l: number, target: number) {
        let low = l;
        let high = n - 1;

        while (low <= high) {
            let mid = (low + high) >> 1;

            if (nums[mid] >= target) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return low < n && nums[low] == target ? low : -1;
    }

    // let dp = Array.from({ length: n + 1 }, () => new Array(2).fill(-1));

    // function solve(i: number, inc: number) {
    //     if (dp[i][inc] !== -1) {
    //         return dp[i][inc];
    //     }

    //     let currentValue = nums[i] + inc;

    //     let len = 1;
    //     // option 1: find (currentValue + 1) directly;
    //     let j = binarySearch(i + 1, currentValue + 1);

    //     if (j !== -1) {
    //         len = Math.max(len, 1 + solve(j, 0));
    //     }

    //     // option 2: find currentValue
    //     j = binarySearch(i + 1, currentValue);

    //     if (j !== -1) {
    //         len = Math.max(len, 1 + solve(j, 1));
    //     }
    //     dp[i][inc] = len;
    //     return len;
    // }

    // for (let i = 0; i < n; i++) {
    //     res = Math.max(res, solve(i, 0), solve(i, 1));
    // }

    let res = 1;
    let dp = Array.from({ length: n + 1 }, () => new Array(2).fill(0));


    for (let i = n - 1; i >= 0; i--) {
        for (let inc = 0; inc < 2; inc++) {
            let currentValue = nums[i] + inc;
            let len = 1;

            let j = binarySearch(i + 1, currentValue + 1);
            if (j !== -1) {
                len = Math.max(len, 1 + dp[j][0]);
            }

            j = binarySearch(i + 1, currentValue);

            if (j !== -1) {
                len = Math.max(len, 1 + dp[j][1]);
            }
            dp[i][inc] = len;
            res = Math.max(res, dp[i][inc]);
        }
    }

    return res;
};