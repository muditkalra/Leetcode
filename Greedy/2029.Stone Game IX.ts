function stoneGameIX(stones: number[]): boolean {
    let countZero = 0;
    let countOne = 0;
    let countTwo = 0;
    let n = stones.length;

    for (let i = 0; i < n; i++) {
        let remainder = stones[i] % 3;
        if (remainder == 1) {
            countOne += 1;
        } else if (remainder == 2) {
            countTwo += 1;
        } else {
            countZero += 1;
        }
    }

    if (countZero % 2 == 0) {
        return countOne >= 1 && countTwo >= 1;
    }
    return Math.abs(countOne - countTwo) > 2;
};