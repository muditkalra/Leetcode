function sumAndMultiply2(s: string, queries: number[][]): number[] {
    let n = s.length;
    let prefMod = new Array(n + 1);
    let digitSumPrefix = new Array(n + 1).fill(0);
    let count: Array<number> = new Array(n + 1);
    let pow10: number[] = new Array<number>();
    let mod = 1000000007;

    prefMod[0] = 0;
    digitSumPrefix[0] = 0;
    count[0] = 0;
    pow10[0] = 1;

    for (let i = 0; i < n; i++) {
        let digit = s[i].charCodeAt(0) - 48;
        prefMod[i + 1] = digit !== 0 ? (prefMod[i] * 10 + digit) % mod : prefMod[i];
        digitSumPrefix[i + 1] = digit > 0 ? digitSumPrefix[i] + digit : digitSumPrefix[i];
        count[i + 1] = digit !== 0 ? count[i] + 1 : count[i];
    }
    let maxCount = count[n];

    for (let i = 0; i < maxCount; i++) {
        pow10[i + 1] = (pow10[i] * 10) % mod;
    }

    let res: number[] = [];
    for (let [l, r] of queries) {
        let len = count[r + 1] - count[l];
        let x = (prefMod[r + 1] - Number((BigInt(prefMod[l]) * BigInt(pow10[len])) % BigInt(mod)) + mod) % mod;
        let sum = digitSumPrefix[r + 1] - digitSumPrefix[l];
        res.push((x * sum) % mod);
    }
    return res
};