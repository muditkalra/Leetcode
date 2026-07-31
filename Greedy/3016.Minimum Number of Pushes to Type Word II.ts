function minimumPushes(word: string): number {
    let n = word.length;
    let freq = new Array(26).fill(0);
    let count = 0;

    for (let i = 0; i < n; i++) {
        let char = word.charCodeAt(i) - 97;
        freq[char] += 1;
    }

    freq.sort((a, b) => b - a);

    for (let i = 0; i < 26; i++) {
        if (!freq[i]) break;
        count += (Math.floor(i / 8) + 1) * freq[i];
    }
    return count
};