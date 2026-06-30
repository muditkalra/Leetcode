function numberOfSubstrings(s: string): number {
    let lastSeen: Record<string, number> = { a: -1, b: -1, c: -1 };

    let n = s.length;
    let res = 0;

    for (let i = 0; i < n; i++) {
        lastSeen[s[i]] = i;
        // min of last seen indices → all substrings starting from 0..min contain all 3 chars
        res += Math.min(lastSeen["a"], lastSeen["b"], lastSeen["c"]) + 1;
    }
    return res

};