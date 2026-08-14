function maximumLengthSubstring(s: string): number {
    let n = s.length;
    let max = 0;
    let freq = new Array(26).fill(0);
    let left = 0;

    for (let i = 0; i < n; i++) {
        let charIndex = s.charCodeAt(i) - 97;
        freq[charIndex]++;
        while (freq[charIndex] > 2) {
            let leftCharIndex = s.charCodeAt(left) - 97;
            freq[leftCharIndex]--;
            left++;
        }
        max = Math.max(max, i - left + 1);
    }
    return max;
};