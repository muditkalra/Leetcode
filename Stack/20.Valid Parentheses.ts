function isValid(s: string): boolean {
    let stack = [];
    let n = s.length;

    for (let i = 0; i < n; i++) {
        let c = s[i];
        if (c == "(" || c == '{' || c == '[') {
            stack.push(c);
        } else {
            if (!stack.length) return false;

            let lastChar = stack[stack.length - 1];

            if (lastChar == "(" && c !== ")") {
                return false;
            }
            if (lastChar == "{" && c !== "}") {
                return false;
            }
            if (lastChar == "[" && c !== "]") {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length == 0;
};