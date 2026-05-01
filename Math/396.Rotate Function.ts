function maxRotateFunction(nums: number[]): number {
    let prevSum = 0; // sum at 0 rotation
    let totalSum = 0;
    let len = nums.length;

    for (let i = 0; i < len; i++) {
        prevSum += (i * nums[i]);
        totalSum += nums[i];
    }


    let res = prevSum;
    for (let k = 1; k < len; k++) {
        prevSum += totalSum - (len * nums[len - k]);
        res = Math.max(res, prevSum);
    }

    return res
};