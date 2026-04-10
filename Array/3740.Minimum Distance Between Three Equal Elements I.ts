//brute force
function minimumDistance(nums: number[]): number {
    let res = Infinity;

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            if (nums[i] !== nums[j]) continue;

            for (let k = j + 1; k < nums.length; k++) {
                if (nums[j] == nums[k]) {
                    res = Math.min(res, j - i + k - j + k - i);
                }
            }
        }
    }
    return res == Infinity ? -1 : res;
};

// optimized
function minimumDistance(nums: number[]): number {
    let res = Infinity;
    let map = new Map<number, number[]>();

    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], [i]);
        } else {
            const arr = map.get(nums[i])!;
            arr?.push(i);
        }


        if (map.has(nums[i]) && map.get(nums[i])!.length == 3) {
            const arr = map.get(nums[i]);
            res = Math.min(res, arr[1] - arr[0] + arr[2] - arr[1] + arr[2] - arr[0]);
            arr.shift();
            map.set(nums[i], arr);
        }
    }
    return res == Infinity ? -1 : res;
};

