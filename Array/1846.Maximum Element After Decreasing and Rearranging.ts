function maximumElementAfterDecrementingAndRearranging(arr: number[]): number {
    arr.sort((a, b) => a - b);
    let ans = 1;
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        if (arr[i] >= ans + 1) {
            ans++;
        }
    }
    return ans;
};