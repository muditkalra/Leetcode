function minElement(nums: number[]): number {
    function sumOfDigits(num: number) {
        let sum = 0;

        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    let n = nums.length;
    let min = Infinity;

    for (let i = 0; i < n; i++) {
        let sum = sumOfDigits(nums[i]);
        min = Math.min(min, sum);
    }
    return min;
};