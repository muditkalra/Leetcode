function removeInvalidParentheses(s: string): string[] {
    let n = s.length;
    let count = 0;
    let needed = 0;

    for (let i = 0; i < n; i++) {
        if (s[i] == '(') {
            count++;
        } else if (s[i] == ")") {
            count -= 1;
        }
        if (count < 0) {
            needed += 1;
            count = 0;
        }
    }

    let total = needed + count;

    let res = new Set<string>();

    function solve(i: number, str: string, c: number) {
        if (c < 0) return; // closing bracket are more than 

        if (i == n) {
            if (str.length == (n - total) && c == 0) { // checking if it's valid and also made minimum number of removal to achieve validness
                res.add(str);
            }
            return;
        }

        //skip
        if (s[i] == '(' || s[i] == ')') {
            solve(i + 1, str, c);

        }
        c = s[i] == '(' ? c + 1 : s[i] == ")" ? c - 1 : c;

        //take
        solve(i + 1, str + s[i], c);

        return;
    }
    solve(0, "", 0);
    return [...res.values()];
};
