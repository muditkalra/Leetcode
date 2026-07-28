function smallestPalindrome(s: string): string {
    let n = s.length;
    let mid = Math.floor(n / 2);

    let freq = new Array(26).fill(0);

    for (let i = 0; i < mid; i++) {
        let charCode = s.charCodeAt(i) - 97;
        freq[charCode]++;
    }
    let firstHalf = "";
    let secondHalf = "";
    for (let i = 0; i < 26; i++) {
        if (freq[i] > 0) {
            firstHalf += String.fromCharCode(i + 97).repeat(freq[i]);
            secondHalf = String.fromCharCode(i + 97).repeat(freq[i]) + secondHalf;
        }
    }
    let midElement = n % 2 ? s[mid] : "";
    return firstHalf + midElement + secondHalf;
};