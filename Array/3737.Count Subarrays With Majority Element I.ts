function countMajoritySubarrays(nums: number[], target: number): number {
    let count = 0;
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        let cur = 0;
        for (let j = i; j < n; j++) {
            cur += target == nums[j] ? 1 : -1;
            if (cur > 0) {
                count++;
            }
        }
    }
    return count
};