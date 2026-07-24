function uniqueXorTriplets(nums: number[]): number {
    let n = nums.length;

    let max = 0;
    for (const v of nums) {
        max = Math.max(max, v);
    }

    let u = 1;
    while (u <= max) {
        u <<= 1;
    }

    let pairPossible: boolean[] = new Array(u).fill(false);

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let xorVal = nums[i] ^ nums[j];
            pairPossible[xorVal] = true;
        }
    }
    let xorRes: boolean[] = new Array(u).fill(false);


    for (let i = 0; i < u; i++) {
        if (pairPossible[i]) {
            for (let j = 0; j < n; j++) {
                let xorValue = i ^ nums[j];
                xorRes[xorValue] = true;
            }
        }
    }
    return xorRes.reduce((acc, cur) => acc += Number(cur), 0);
};