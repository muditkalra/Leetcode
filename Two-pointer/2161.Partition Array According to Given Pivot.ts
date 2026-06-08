function pivotArray(nums: number[], pivot: number): number[] {
    let n = nums.length;
    let res = new Array(n).fill(pivot);

    let left = 0;
    let right = n - 1;
    for (let i = 0; i < n; i++) {
        if (nums[i] < pivot) {
            res[left] = nums[i];
            left++;
        }
    }

    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] > pivot) {
            res[right] = nums[i];
            right--;
        }
    }

    return res
};