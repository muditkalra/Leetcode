// same as 2616(prefixsum folder);

function getDistances(arr: number[]): number[] {
    let n = arr.length;
    let res = new Array(n).fill(0);
    let sum = new Map<number, number>();
    let freq = new Map<number, number>();

    // 0 to n

    for (let i = 0; i < n; i++) {
        let curFreq = (freq.get(arr[i]) || 0) * i;
        let curSum = (sum.get(arr[i]) || 0);

        res[i] = curFreq - curSum;
        freq.set(arr[i], (freq.get(arr[i]) || 0) + 1);
        sum.set(arr[i], (sum.get(arr[i]) || 0) + i);
    }

    sum.clear();
    freq.clear();

    // n-1 to 0;
    for (let i = n - 1; i >= 0; i--) {
        let curFreq = (freq.get(arr[i]) || 0) * i;
        let curSum = (sum.get(arr[i]) || 0);
        res[i] += (curSum - curFreq);
        freq.set(arr[i], (freq.get(arr[i]) || 0) + 1);
        sum.set(arr[i], (sum.get(arr[i]) || 0) + i);
    }
    return res
};