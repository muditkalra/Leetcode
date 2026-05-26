function numberOfSpecialChars(word: string): number {
    let set = new Set<string>(word);
    let count = 0;

    for (let i = 0; i < 26; i++) {
        let lo = String.fromCharCode(97 + i);
        let up = String.fromCharCode(65 + i);
        if (set.has(lo) && set.has(up)) {
            count++;
        }
    }
    return count
};