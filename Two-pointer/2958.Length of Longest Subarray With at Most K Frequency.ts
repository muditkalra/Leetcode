function maxSubarrayLength(nums: number[], k: number): number {
    let n = nums.length;
    let map = new Map();
    let len = 0;
    let l = 0;

    for (let r = 0; r < n; r++) {
        map.set(nums[r], (map.get(nums[r]) || 0) + 1);
        while (map.get(nums[r]) > k) {
            map.set(nums[l], map.get(nums[l]) - 1);
            l++;
        }
        len = Math.max(len, r - l + 1);
    }
    return len
};