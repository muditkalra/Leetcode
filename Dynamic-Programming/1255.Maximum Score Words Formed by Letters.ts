// This can also be solved using bitmasking  by taking all possible combination as bitmask
// run a loop from 0 to (1<<n), 1<<n are the all possible combinations, example 0010 :means we have taken 1 index word only, 0011 means we have taken 0 and 1st index words only


function maxScoreWords(words: string[], letters: string[], score: number[]): number {
    let n = words.length;
    let m = letters.length;

    let wordsFreq = Array.from({ length: n }, () => new Map());
    for (let i = 0; i < n; i++) {
        for (let char of words[i]) {
            let map = wordsFreq[i];
            map.set(char, (map.get(char) || 0) + 1);
        }
    }

    let lettersFreq = new Array(26).fill(0);

    for (let i = 0; i < m; i++) {
        let charIdx = letters[i].charCodeAt(0) - 97;
        lettersFreq[charIdx] += 1;
    }


    function solve(i: number, freq: number[]): number {
        if (i == n) {
            return 0;
        }

        // checking if freq array contains required chars
        let wordFreq = wordsFreq[i];
        let canTake = true;
        let take = 0;
        let curScore = 0;

        //skip 
        let skip = solve(i + 1, freq);

        for (let i = 0; i < 26; i++) {
            let char = String.fromCharCode(97 + i);
            if (lettersFreq[i] < freq[i] + (wordFreq.get(char) || 0)) {
                return skip;
            }
        }

        for (let [ch, count] of wordFreq.entries()) {
            let charIdx = ch.charCodeAt(0) - 97;
            freq[charIdx] += count;
            curScore += (score[charIdx] * count);
        }

        if (canTake) {
            take += curScore + solve(i + 1, freq);
        }

        // undo freq count
        for (let [ch, count] of wordFreq.entries()) {
            let charIdx = ch.charCodeAt(0) - 97;
            freq[charIdx] -= count;
        }

        return Math.max(skip, take);
    }
    return solve(0, new Array(26).fill(0));
};