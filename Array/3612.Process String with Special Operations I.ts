function processStr(s: string): string {
    let res: string[] = []
    let n = s.length
    for (let i = 0; i < n; i++) {
        if (s[i] >= 'a' && s[i] <= 'z') {
            res.push(s[i]);
        } else if (s[i] == '*') {
            res.pop();
        } else if (s[i] == '#') {
            res.push(...res);
        } else if (s[i] == '%') {
            res.reverse();
        }
    }
    return res.join('');
};