function minSumOfLengths(arr: number[], target: number): number {
    let n = arr.length;

    let l = 0;
    let r = 0;

    let sum = 0;
    let minLenIdx = new Array(n).fill(Infinity);
    let minLen = Infinity;
    let bestMin = Infinity;

    while (r < n) {
        sum += arr[r];

        while (sum > target && l <= r) {
            sum -= arr[l];
            l++;
        }

        if (sum == target) {
            let len = r - l + 1;
            if (l > 0 && minLenIdx[l - 1] !== Infinity) {
                minLen = Math.min(minLen, minLenIdx[l - 1] + len);
            }
            bestMin = Math.min(bestMin, len);
        }
        minLenIdx[r] = bestMin;
        r++;
    }
    return minLen == Infinity ? -1 : minLen
};