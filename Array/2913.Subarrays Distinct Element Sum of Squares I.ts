function sumCounts(nums: number[]): number {
    let n = nums.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        let set = new Set();
        for (let j = i; j < n; j++) {
            set.add(nums[j]);
            count += Math.pow(set.size, 2);
        }
    }
    return count;
};