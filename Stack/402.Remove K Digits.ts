function removeKdigits(num: string, k: number): string {
    let stack = [];
    let n = num.length;

    for (let i = 0; i < n; i++) {
        while (stack.length && stack[stack.length - 1] > num[i] && k > 0) {
            stack.pop();
            k--;
        }
        stack.push(num[i]);
    }

    while (k) {
        stack.pop();
        k--;
    }

    let i = 0;
    while (i < stack.length && stack[i] === "0") {
        i++;
    }

    const ans = stack.slice(i).join("");

    return ans === "" ? "0" : ans;
};