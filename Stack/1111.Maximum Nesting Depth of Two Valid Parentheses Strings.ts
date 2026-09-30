function maxDepthAfterSplit(seq: string): number[] {
    let n = seq.length;
    let res = new Array(n).fill(0);
    let d = 0;

    for (let i = 0; i < n; i++) {
        let c = seq[i];
        if (c == "(") {
            d++;
            res[i] = d % 2;
        }

        if (c == ")") {
            res[i] = d % 2;
            d--;
        }
    }
    return res;
};