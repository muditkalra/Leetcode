class TrieNode {
    children: (TrieNode | null)[] = new Array(26).fill(null);
    minLen: number = Infinity;
    index: number = -1;
}

class Trie {
    root: TrieNode = new TrieNode();

    insert(s: string, index: number) {
        let len = s.length;
        if (this.root.minLen > len) {
            this.root.minLen = len;
            this.root.index = index;
        }
        let node = this.root;
        for (let i = 0; i < len; i++) {
            let charIndex = s.charCodeAt(i) - 97;
            if (node.children[charIndex] == null) {
                node.children[charIndex] = new TrieNode();
            }

            if (node.children[charIndex].minLen > len) {
                node.children[charIndex].minLen = len;
                node.children[charIndex].index = index;
            }
            node = node.children[charIndex];
        }
    }

    query(s: string) {
        let node = this.root;
        let len = s.length;

        for (let i = 0; i < len; i++) {
            let charIndex = s.charCodeAt(i) - 97;
            if (node.children[charIndex] == null) {
                break;
            }
            node = node.children[charIndex];
        }
        return node.index;
    }
}



function stringIndices(wordsContainer: string[], wordsQuery: string[]): number[] {
    const trie = new Trie();
    let n = wordsContainer.length;
    let m = wordsQuery.length;
    let res = new Array(m).fill(0);

    for (let i = 0; i < n; i++) {
        let str = wordsContainer[i].split("").reverse().join("");
        trie.insert(str, i);
    }

    for (let i = 0; i < m; i++) {
        let str = wordsQuery[i].split("").reverse().join("");
        res[i] = trie.query(str);
    }

    return res;
};