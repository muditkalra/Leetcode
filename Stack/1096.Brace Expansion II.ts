function braceExpansionII(expression: string): string[] {
    let opsStack: string[] = [];
    let setStack: Set<string>[] = [];
    let n = expression.length;

    function operate() {
        let start = setStack.length - 2
        let end = setStack.length - 1;

        if (opsStack[opsStack.length - 1] == "+") {
            for (let item of setStack[end]) {
                setStack[start].add(item);
            }
        } else { // "*"
            let temp = new Set<string>();

            for (let item1 of setStack[start]) {
                for (let item2 of setStack[end]) {
                    temp.add(item1 + item2);
                }
            }
            setStack[start] = temp;
        }
        opsStack.pop();
        setStack.pop();
    }

    for (let i = 0; i < n; i++) {
        const char = expression[i];

        if (char == ",") {
            while (opsStack.length && opsStack[opsStack.length - 1] == "*") {
                operate();
            }

            opsStack.push("+");
        } else if (char == "{") {      // opening bracket
            if (i > 0 && (expression[i - 1] == "}" || /[a-z]/.test(expression[i - 1]))) {
                opsStack.push("*");
            }
            opsStack.push("{");
        } else if (char == "}") {               // closing bracket
            while (opsStack.length && opsStack[opsStack.length - 1] !== "{") {
                operate();
            }
            opsStack.pop();
        } else { // character
            if (i > 0 && (expression[i - 1] == "}" || /[a-z]/.test(expression[i - 1]))) {
                opsStack.push("*");
            }
            setStack.push(new Set([char]));
        }
    }

    while (opsStack.length > 0) {
        operate();
    }

    return Array.from(setStack[setStack.length - 1]).sort();
};