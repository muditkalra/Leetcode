function gcdSum(nums: number[]): number {
    function gcd(a: number, b: number) {
        if (a == 0) {
            return b;
        }
        return gcd(b % a, a);
    }


    let res = [];
    let max = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        max = Math.max(max, nums[i]);
        res.push(gcd(nums[i], max));
    }

    res.sort((a, b) => a - b);
    let l = 0;
    let r = res.length - 1;
    let sum = 0;

    while (l < r) {
        let gcdPair = gcd(res[l], res[r]);
        sum += gcdPair;
        l++;
        r--;
    }
    return sum
};
