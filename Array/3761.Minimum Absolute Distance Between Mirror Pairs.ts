function minMirrorPairDistance(nums: number[]): number {
    let map = new Map<number, number>();

    let res = Infinity;

    function reverseNumber(n: number) {
        let number = 0;
        while (n > 0) {
            let d = n % 10;
            number = number * 10 + d;
            n = Math.floor(n / 10);
        }
        return number;
    }

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            res = Math.min(res, i - map.get(nums[i])!);
        }
        const curReverse = reverseNumber(nums[i]);
        map.set(curReverse, i);
    }
    return res != Infinity ? res : -1;
};