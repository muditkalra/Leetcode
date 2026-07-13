function sequentialDigits(low: number, high: number): number[] {
    let leftLen = low.toString().length;
    let rightLen = high.toString().length;

    let str = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    function createStr(index: number) {
        let cur = [];
        for (let i = 0; i < index; i++) {
            cur.push(str[i]);
        }
        return cur;
    }

    function createNumber(s: string[]) {
        return parseInt(s.join(""), 10);
    }

    let res = [];

    for (let i = leftLen; i <= rightLen; i++) {
        let cur = createStr(i);
        for (let j = i; j < str.length; j++) {
            let num = createNumber(cur);
            if (low <= num && high >= num) {
                res.push(num);
            }
            cur.shift();
            cur.push(str[j]);
        }
        let num = createNumber(cur);
        if (low <= num && high >= num && res[res.length - 1] !== num) {
            res.push(num);
        }
    }

    return res
};