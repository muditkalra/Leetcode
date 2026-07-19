function smallestSubsequence(s: string): string {
    let map = new Map();
    let stack = []
    let n = s.length;
    let set = new Set();

    for (let i = 0; i < n; i++) {
        map.set(s[i], i);
    }

    for (let i = 0; i < n; i++) {
        if (set.has(s[i])) {
            continue;
        }

        if (stack.length && stack[stack.length - 1].charCodeAt(0) > s[i].charCodeAt(0)) {
            while (stack.length) {
                let lastChar = stack[stack.length - 1];
                if (map.get(lastChar) > i && lastChar.charCodeAt(0) > s.charCodeAt(i)) {
                    stack.pop();
                    set.delete(lastChar);
                } else {
                    break;
                }
            }
        }
        stack.push(s[i]);
        set.add(s[i]);
    }
    return stack.join("");
};