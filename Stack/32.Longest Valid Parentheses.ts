function longestValidParentheses(s: string): number {
    let n = s.length;
    let open = 0
    let close = 0;
    let res = 0;


    for (let i = 0; i < n; i++) {
        let c = s[i];

        if (c == "(") {
            open++;
        } else {
            close++;
        }

        if (open == close) {
            res = Math.max(res, open + close);
        }

        if (open < close) {
            open = 0;
            close = 0;
        }
    }
    open = 0;
    close = 0;

    for (let i = n - 1; i >= 0; i--) {
        let c = s[i];

        if (c == "(") {
            open++;
        } else {
            close++;
        }

        if (open == close) {
            res = Math.max(res, open + close);
        }

        if (open > close) {
            open = 0;
            close = 0;
        }
    }

    return res

};


// function longestValidParentheses(s: string): number {
//     let stack = [-1];
//     let n = s.length;
//     let res = 0;

//     for (let i = 0; i < n; i++) {
//         if (s[i] == '(') {
//             stack.push(i);
//         } else {
//             stack.pop();
//         }

//         if (stack.length == 0) {
//             stack.push(i);
//         } else {
//             let lastValidIdx = stack[stack.length - 1];
//             res = Math.max(res, i - lastValidIdx);
//         }
//     }

//     return res;
// }


