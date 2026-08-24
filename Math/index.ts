function sumGame(num: string): boolean {
    let n = num.length;
    let leftSum = 0;
    let rightSum = 0;
    let leftCount = 0;
    let rightCount = 0;
    let mid = n >> 1;


    for (let i = 0; i < n; i++) {
        if (i < mid) {
            leftSum += num[i] !== "?" ? Number(num[i]) : 0;
            leftCount += num[i] == "?" ? 1 : 0;
        } else {
            rightSum += num[i] !== "?" ? Number(num[i]) : 0;
            rightCount += num[i] == "?" ? 1 : 0;
        }
    }

    if ((leftCount + rightCount) % 2) {
        return true;
    }

    if ((leftSum - rightSum) * 2 == 9 * (rightCount - leftCount)) {
        return false;
    }
    return true;
};