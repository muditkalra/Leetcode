function maximumProduct(nums: number[]): number {
    let max = -Infinity;
    let secondMax = -Infinity;
    let thirdMax = -Infinity;
    let min = Infinity;
    let secondMin = Infinity;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        if (nums[i] > max) {
            thirdMax = secondMax;
            secondMax = max;
            max = nums[i];
        } else if (nums[i] > secondMax) {
            thirdMax = secondMax;
            secondMax = nums[i];
        } else if (nums[i] > thirdMax) {
            thirdMax = nums[i];
        }

        if (nums[i] < min) {
            secondMin = min;
            min = nums[i];
        } else if (nums[i] < secondMin) {
            secondMin = nums[i];
        }

        console.log({ max, secondMax, thirdMax, min, secondMin });
    }
    return Math.max(max * secondMax * thirdMax, max * min * secondMin);
};