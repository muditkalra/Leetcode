function uniqueXorTriplets(nums: number[]): number {
    let n = nums.length;
    if (n < 3) return n;
    let count = 0;
    let temp = n;
    while (temp > 0) {
        count++;
        temp >>= 1;
    }

    return Math.pow(2, count);
};