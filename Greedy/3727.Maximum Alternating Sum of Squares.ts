function maxAlternatingSum(nums: number[]): number {
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        nums[i] = nums[i] * nums[i];
    }

    nums.sort((a, b) => a - b);

    let sum = 0;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        sum -= nums[i];
    }

    for (let i = Math.floor(n / 2); i < n; i++) {
        sum += nums[i];
    }

    return sum;
};