function firstStableIndex(nums: number[], k: number): number {
    let n = nums.length;
    let minSeen = new Array(n).fill(0);
    let min = Infinity;

    for (let i = n - 1; i >= 0; i--) {
        min = Math.min(min, nums[i]);
        minSeen[i] = min;
    }

    let max = 0;
    for (let i = 0; i < n; i++) {
        max = Math.max(max, nums[i]);
        let score = max - minSeen[i];
        if (score <= k) return i;
    }
    return -1;
};