function minOperations(nums: number[], x: number): number {
    let n = nums.length;
    let sum = nums.reduce((acc, cur) => acc += cur, 0);
    if (sum < x) return -1;

    let reqSum = sum - x;
    let curSum = 0;
    let min = Infinity;
    let l = 0;

    for (let i = 0; i < n; i++) {
        curSum += nums[i];

        while (curSum > reqSum) {
            curSum -= nums[l];
            l++;
        }

        if (curSum == reqSum) {
            min = Math.min(n - (i - l + 1), min);
        }
    }
    return min !== Infinity ? min : -1;
};