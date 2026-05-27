function numberOfSpecialChars(word: string): number {
    let lo = new Array(26).fill(-1); // last index of lowerCase
    let up = new Array(26).fill(-1); // first index of upperCase;
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        if (word[i] >= "a" && word[i] <= "z") {
            let idx = word.charCodeAt(i) - 97;
            lo[idx] = i;
        } else {
            let idx = word.charCodeAt(i) - 65;
            if (up[idx] == -1) {
                up[idx] = i;
            }
        }
    }

    for (let i = 0; i < 26; i++) {
        if (lo[i] !== -1 && up[i] !== -1 && lo[i] < up[i]) {
            count++;
        }
    }
    return count
};