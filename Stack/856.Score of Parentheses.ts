function scoreOfParentheses(s: string): number {
    let st = [];
    let score = 0;
    let n = s.length;

    for (let i = 0; i < n; i++) {
        if (s[i] == "(") {
            st.push(score);
            score = 0;
        } else {
            if (s[i - 1] == "(") {
                score = st[st.length - 1] + 1;
            } else {
                score = st[st.length - 1] + 2 * score;
            }
            st.pop();
        }
    }
    return score;
};


// sc: O(1)

// function scoreOfParentheses(s: string): number {
//     let score = 0;
//     let depth = 0;
//     let n = s.length;

//     for (let i = 0; i < n; i++) {
//         if (s[i] == "(") {
//             depth += 1;
//         } else {
//             depth -= 1;
//             if (s[i - 1] == "(") {
//                 score += (1 << depth);
//             }
//         }
//     }
//     return score;
// };