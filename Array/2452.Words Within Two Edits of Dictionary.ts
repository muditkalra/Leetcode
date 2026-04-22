// This can be solved using Trie and Dfs 

function twoEditWords(queries: string[], dictionary: string[]): string[] {
    let res = [];

    for (let i = 0; i < queries.length; i++) {
        for (let j = 0; j < dictionary.length; j++) {
            const word = queries[i];
            const dictWord = dictionary[j];
            let diff = 0;
            for (let k = 0; k < word.length; k++) {
                if (word[k] !== dictWord[k]) {
                    diff++;
                }
            }
            if (diff <= 2) {
                res.push(word);
                break;
            }
        }
    }
    return res
};