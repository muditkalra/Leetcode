// Idea is we need to calculate subarray whose product 


function resultArray(nums: number[], k: number): number[] {
    let n = nums.length;

    let prevCount = new Array(k).fill(0);
    let result = new Array(k).fill(0);

    for (let i = 0; i < n; i++) {
        let curCount = new Array(k).fill(0);

        let currentElementRemainder = nums[i] % k;
        curCount[currentElementRemainder] += 1;

        for (let prevRem = 0; prevRem < k; prevRem++) {
            let newRemain = (prevRem * nums[i] % k) % k;
            curCount[newRemain] += prevCount[prevRem];
        }
        prevCount = curCount;

        for (let x = 0; x < k; x++) {
            result[x] += prevCount[x];
        }
    }
    return result
};