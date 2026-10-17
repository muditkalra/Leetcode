function minSwaps(nums: number[]): number {

    function sumOfDigit(num: number): number {
        let n = num;
        let s = 0;

        while (n > 0) {
            s += n % 10;
            n = Math.floor(n / 10);
        }
        return s;
    }

    const newNums = nums.toSorted((a, b) => sumOfDigit(a) - sumOfDigit(b) || a - b);
    let n = nums.length;
    let swaps = 0;
    let map = new Map<number, number>();

    for (let i = 0; i < n; i++) {
        map.set(nums[i], i);
    }


    for (let i = 0; i < n; i++) {
        if (nums[i] !== newNums[i]) {
            let shouldBe = newNums[i];
            let shouldBeIdx = map.get(shouldBe)!;
            let temp = nums[i];
            nums[i] = shouldBe;
            map.set(shouldBe, i);
            map.set(temp, shouldBeIdx);
            nums[shouldBeIdx] = temp;
            swaps++;
        }
    }
    return swaps
};