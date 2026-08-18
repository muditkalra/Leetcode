function largestInteger(nums: number[], k: number): number {
    let n = nums.length;
    if (k == n) {
        return Math.max(...nums);
    }

    let set = new Array(51).fill(0);
    for (let i = 0; i < n; i++) {
        set[nums[i]] += 1;
    }

    if (k == 1) {
        for (let i = 50; i >= 0; i--) {
            if (set[i] == 1) {
                return i;
            }
        }
        return -1;
    }
    let first = nums[0];
    let last = nums[n - 1];
    if (first == last || (set[first] > 1 && set[last] > 1)) {
        return -1;
    }

    if (set[first] > 1) {
        return last;
    }
    if (set[last] > 1) {
        return first;
    }
    return Math.max(last, first);
}