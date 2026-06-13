function mapWordWeights(words: string[], weights: number[]): string {
    let n = words.length;
    for (let i = 0; i < n; i++) {
        let m = words[i].length;
        let sum = 0;
        for (let j = 0; j < m; j++) {
            let index = words[i].charCodeAt(j) - 97;
            sum += weights[index];
        }
        words[i] = String.fromCharCode("z".charCodeAt(0) - (sum % 26));
    }
    return words.join("");
};