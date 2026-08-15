function longestSubsequence(nums: number[]): number {
    let n = nums.length;
    let curXor = nums[0];
    let allZero = !nums[0];

    for (let i = 1; i < n; i++) {
        curXor ^= nums[i];
        if (nums[i] > 0) {
            allZero = false;
        }
    }

    return allZero ? 0 : curXor == 0 ? n - 1 : n;
};