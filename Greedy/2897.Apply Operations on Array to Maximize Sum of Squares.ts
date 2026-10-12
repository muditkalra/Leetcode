function maxSum(nums: number[], k: number): number {
    let n = nums.length;
    let bitCount = new Array(32).fill(0);
    let mod = 10 ** 9 + 7;

    for (let num of nums) {
        for (let bit = 0; bit < 32; bit++) {
            if (num & (1 << bit)) {
                bitCount[bit] += 1;
            }
        }
    }

    let res = 0;

    while (k--) {
        let cur = 0;

        for (let bit = 0; bit < 32; bit++) {
            if (bitCount[bit] > 0) {
                cur = cur | (1 << bit);
                bitCount[bit]--;
            }
        }

        const curBig = BigInt(cur);
        res = Number((BigInt(res) + curBig * curBig) % BigInt(mod));
    }
    return res;
};