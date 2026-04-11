function minimumDistance(nums: number[]): number {
    let res = Infinity;
    let map = new Map<number, number[]>();

    for (let k = 0; k < nums.length; k++) {
        if (!map.has(nums[k])) {
            map.set(nums[k], [k]);
        } else {
            const arr = map.get(nums[k])!;
            arr?.push(k);
        }


        if (map.has(nums[k]) && map.get(nums[k])!.length >= 3) {
            const arr = map.get(nums[k])!;
            const size = arr.length;
            const i = arr[size - 3];
            res = Math.min(res, 2 * (k - i)); // formula => 2(k-i)
        }
    }
    return res == Infinity ? -1 : res;
};
