function closestTarget(words: string[], target: string, startIndex: number): number {
    if (words[startIndex] == target) return 0;

    let len = words.length;
    let res = len;

    for (let i = 1; i < len; i++) {
        let forwardIndex = (startIndex + i + len) % len;
        let backwardIndex = (startIndex - i + len) % len;
        if (words[forwardIndex] == target || words[backwardIndex] == target) {
            res = Math.min(res, i);
            break;
        }
    }

    return res != len ? res : -1;
};