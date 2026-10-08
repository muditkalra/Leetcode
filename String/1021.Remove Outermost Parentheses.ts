function removeOuterParentheses(s: string): string {
    let n = s.length;
    let res = "";
    let count = 0;

    for (let i = 0; i < n; i++) {

        if (s[i] == "(") {
            count++;
            if (count <= 1) continue;
        } else {
            count--;
            if (count == 0) continue;
        }

        res += s[i];
    }
    return res;
};