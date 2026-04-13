function getMinDistance(nums: number[], target: number, start: number): number {
    let res = Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            res = Math.min(res, Math.abs(i - start));
        }
    }
    return res
};