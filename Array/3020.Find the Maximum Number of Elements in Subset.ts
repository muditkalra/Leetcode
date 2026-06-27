function maximumLength(nums: number[]): number {
    let map = new Map();
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    let res = 0;

    if (map.has(1)) {
        let count = map.get(1);
        if (count % 2 == 0) {
            count -= 1;
        }
        res = count;
    }

    map.delete(1);

    for (let key of map.keys()) {
        let cur = key;
        let len = 0;
        while (map.has(cur) && map.get(cur) > 1) {
            len += 2;
            cur = Math.pow(cur, 2);
        }
        res = Math.max(res, len + (map.get(cur) ? 1 : -1));
    }
    return res
};