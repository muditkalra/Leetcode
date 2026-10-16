function search(nums: number[], target: number): number {
    let n = nums.length;
    let low = 0;
    let high = n - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] == target) return mid;
        if (nums[low] <= nums[mid]) { // left portion sorted
            if (nums[mid] >= target && nums[low] <= target) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if (nums[mid] <= target && nums[high] >= target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return -1;
};