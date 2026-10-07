// Here we are incrementally adding values to sum and freq and updating res and then using same sum and freq(after clearing) adding value in reverse order and modifying the result 
// the core idea is prefix sum and freq that's why this question is placed in `prefixsum` folder

function distance(nums: number[]): number[] {
    let n = nums.length;
    let res = new Array(n).fill(0);
    let sum = new Map<number, number>();
    let freq = new Map<number, number>();

    // 0 to n

    for (let i = 0; i < n; i++) {
        let curFreq = (freq.get(nums[i]) || 0) * i;
        let curSum = (sum.get(nums[i]) || 0);

        res[i] = curFreq - curSum;
        freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
        sum.set(nums[i], (sum.get(nums[i]) || 0) + i);
    }

    sum.clear();
    freq.clear();

    // n-1 to 0;
    for (let i = n - 1; i >= 0; i--) {
        let curFreq = (freq.get(nums[i]) || 0) * i;
        let curSum = (sum.get(nums[i]) || 0);
        res[i] += (curSum - curFreq);
        freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
        sum.set(nums[i], (sum.get(nums[i]) || 0) + i);
    }
    return res
};
