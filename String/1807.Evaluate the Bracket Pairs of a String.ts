function evaluate(s: string, knowledge: string[][]): string {
    let map = new Map<string, string>();

    for (let [key, val] of knowledge) {
        map.set(key, val);
    }

    let n = s.length;
    let open = false;
    let newStr = "";
    let temp = "";


    for (let i = 0; i < n; i++) {
        if (s[i] == "(") {
            open = true;
            continue;
        }

        if (open) {
            if (s[i] == ")") {

                newStr += map.has(temp) ? map.get(temp) : "?";
                temp = "";
                open = false;
            } else {
                temp += s[i];
            }
        } else {
            newStr += s[i];
        }
    }
    return newStr;
};