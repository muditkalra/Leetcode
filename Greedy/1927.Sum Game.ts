// if total '?' is odd then alice always win as she will be able to make sum not equal
// in Even case there are two case:
// if one question mark is on left and other is on right then whatever alice puts, bob will be able to counter it
// if both question marks are on the same side then whatever alice puts, bob will aim to reduce the increase from whatever alice picked
// let suppose alice picked x then bob will pick 9-x so as to limit the difference between both sides sum
// if there are 4 question marks then their total will be knowsum + 4.5*(no of question marks)
// so the final formula will be 2* leftSum + 9* leftCount == 2* rightSum + 9*rightCount;


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