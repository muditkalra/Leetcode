function numOfStrings(patterns: string[], word: string): number {
    let count = 0;
    let n = patterns.length;

    for (let i = 0; i < n; i++) {
        if (word.includes(patterns[i])) {
            count++;
        }
    }
    return count
};