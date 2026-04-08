function xorAfterQueries(nums: number[], queries: number[][]): number {
    let mod = 10 ** 9 + 7;

    for (let i = 0; i < queries.length; i++) {
        let [l, r, k, v] = queries[i];

        while (l <= r) {
            nums[l] = (nums[l] * v) % mod;
            l += k;
        }
    }

    let xor = 0;
    for (let i = 0; i < nums.length; i++) {
        xor ^= nums[i];
    }

    return xor;
};