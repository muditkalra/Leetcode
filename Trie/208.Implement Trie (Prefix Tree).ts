class TrieNode {
    childrens: (TrieNode | null)[] = new Array(26).fill(null);
    wordEnd: boolean = false;
}


class Trie {
    root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let node = this.root;
        let len = word.length;

        for (let i = 0; i < len; i++) {
            let charIndex = word.charCodeAt(i) - 97;

            if (node.childrens[charIndex] == null) {
                node.childrens[charIndex] = new TrieNode();
            }
            node = node.childrens[charIndex];
        }
        node.wordEnd = true;
    }

    search(word: string): boolean {
        let node = this.root;
        let len = word.length;

        for (let i = 0; i < len; i++) {
            let charIndex = word.charCodeAt(i) - 97;
            if (node.childrens[charIndex] == null) {
                return false;
            }
            node = node.childrens[charIndex];
        }
        return node.wordEnd;
    }

    startsWith(prefix: string): boolean {
        let node = this.root;
        let len = prefix.length;

        for (let i = 0; i < len; i++) {
            let charIndex = prefix.charCodeAt(i) - 97;
            if (node.childrens[charIndex] == null) {
                return false;
            }
            node = node.childrens[charIndex];
        }
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */