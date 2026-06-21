function maxIceCream(costs: number[], coins: number): number {
    let max = Math.max(...costs);
    let countArr = new Array(max + 1).fill(0);
    let n = costs.length;

    for (let i = 0; i < n; i++) {
        countArr[costs[i]] += 1;
    }

    let res = 0;
    for (let i = 0; i < max + 1; i++) {
        if (countArr[i] == 0) continue;

        let count = countArr[i];
        for (let j = 0; j < count; j++) {
            if (coins < i) {
                return res;
            }
            res += 1;
            coins -= i;
        }
    }
    return res
};