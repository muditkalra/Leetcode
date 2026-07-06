function removeCoveredIntervals(intervals: number[][]): number {
    intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1]);  // O(n log n)
    let curEnd = 0;

    let n = intervals.length;
    let count = 0;

    for (let [_, end] of intervals) { // O(n)
        if (end > curEnd) {
            count++;
            curEnd = end;
        }
    }
    return count;
};