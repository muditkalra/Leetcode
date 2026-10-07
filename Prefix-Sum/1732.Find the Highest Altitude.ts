function largestAltitude(gain: number[]): number {
    let max = 0;
    let n = gain.length;

    let cur = 0;
    for (let i = 0; i < n; i++) {
        cur += gain[i];
        max = Math.max(max, cur);
    }

    return max
};