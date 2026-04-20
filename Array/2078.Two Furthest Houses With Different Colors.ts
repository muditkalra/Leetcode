function maxDistance(colors: number[]): number {
    let res = 0;
    let len = colors.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = len - 1; j >= i + 1; j--) {
            if (colors[i] !== colors[j]) {
                res = Math.max(res, j - i);
                break;
            }
        }
    }
    return res
};