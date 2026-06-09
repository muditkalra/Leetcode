function maxTotalValue(nums: number[], k: number): number {
    let n = nums.length;
    let max = 0;
    let min = Infinity;

    for (let i = 0; i < n; i++) {
        max = Math.max(nums[i], max);
        min = Math.min(nums[i], min);
    }

    return (max - min) * k
};