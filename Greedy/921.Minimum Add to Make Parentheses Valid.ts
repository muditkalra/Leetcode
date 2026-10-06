
// This can be done using stack

function minAddToMakeValid(s: string): number {
    let n = s.length;

    let count = 0;
    let res = 0;
    for (let i = 0; i < n; i++) {
        let c = s[i];
        if (c == '(') {
            count++;
        } else {
            count--;
        }
        if (count < 0) {
            res += 1;
            count = 0;
        }
    }
    return res + count;
};