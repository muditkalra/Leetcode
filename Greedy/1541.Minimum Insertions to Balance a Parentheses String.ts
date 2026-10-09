function minInsertions(s: string): number {
    let n = s.length;
    let res = 0
    let open = 0;
    let i = 0;

    while (i < n) {
        if (s[i] == '(') {
            open++;
            i += 1;
        } else {
            if (open == 0) {
                res += 1;
            } else {
                open -= 1;
            }

            if (i < n - 1 && s[i + 1] == ')') {
                i += 2;
            } else {
                res += 1
                i++;
            }
        }
    }
    res += open * 2;
    return res;
};