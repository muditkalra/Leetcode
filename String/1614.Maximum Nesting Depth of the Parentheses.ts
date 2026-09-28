function maxDepth(s: string): number {
    let openingCount = 0;
    let n = s.length;
    let max = 0;


    for (let i = 0; i < n; i++) {
        if (s[i] == "(") openingCount += 1;

        if (s[i] == ")") {
            max = Math.max(openingCount, max);
            openingCount -= 1;
        }
    }
    return max;
};