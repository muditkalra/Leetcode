function arrayRankTransform(arr: number[]): number[] {
    let n = arr.length;
    let newArr = arr.map((e, i) => [e, i]).sort((a, b) => a[0] - b[0]);

    let res = new Array(n);

    let rank = 1;

    for (let i = 0; i < n; i++) {
        let idx = newArr[i][1];
        if (i > 0 && newArr[i][0] !== newArr[i - 1][0]) {
            rank++;
        }
        res[idx] = rank;
    }

    return res
};