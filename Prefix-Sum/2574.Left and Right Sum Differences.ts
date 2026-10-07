function leftRightDifference(nums: number[]): number[] {
    let sum = 0;
    let res = [];
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        sum += nums[i];
    }
    let leftSum = 0;
    for (let i = 0; i < n; i++) {
        sum -= nums[i];
        res.push(Math.abs(leftSum - sum));
        leftSum += nums[i];
    }

    return res
};