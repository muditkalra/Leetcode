// space optimized bottom up dp
function subsequencePairCount(nums: number[]): number {
    let n = nums.length;
    let mod = 10 ** 9 + 7;
    let maxValue = Math.max(...nums);

    function gcd(a: number, b: number) {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    }

    let t = Array.from({ length: maxValue + 1 }, () => new Array(maxValue + 1).fill(-1));

    let g = Array.from({ length: maxValue + 1 }, () => new Array(maxValue + 1));

    for (let i = 0; i <= maxValue; i++) {
        for (let j = 0; j <= maxValue; j++) {
            g[i][j] = gcd(i, j);
        }
    }

    // base case fill
    for (let i = 0; i <= maxValue; i++) {
        for (let j = 0; j <= maxValue; j++) {
            t[i][j] = (i == j && i != 0) ? 1 : 0;
        }
    }

    for (let i = n - 1; i >= 0; i--) {
        let nT = Array.from({ length: maxValue + 1 }, () => new Array(maxValue + 1).fill(-1));
        for (let first = maxValue; first >= 0; first--) {
            for (let second = maxValue; second >= 0; second--) {
                let skip = t[first][second];
                let takeg1 = t[g[first][nums[i]]][second];
                let takeg2 = t[first][g[second][nums[i]]];
                nT[first][second] = (skip + takeg1 + takeg2) % mod;
            }
        }
        t = nT;
    }

    return t[0][0];
};