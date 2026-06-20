function maxBuilding(n: number, restrictions: number[][]): number {
    restrictions.push([1, 0]);
    restrictions.sort((a, b) => a[0] - b[0]);


    if (restrictions[restrictions.length - 1][0] !== n) {
        restrictions.push([n, n - 1]);
    }

    let m = restrictions.length;

    for (let i = 1; i < m; i++) {
        let dist = restrictions[i][0] - restrictions[i - 1][0];
        restrictions[i][1] = Math.min(restrictions[i][1], restrictions[i - 1][1] + dist);
    }

    for (let i = m - 2; i >= 0; i--) {
        let dist = restrictions[i + 1][0] - restrictions[i][0];
        restrictions[i][1] = Math.min(restrictions[i][1], restrictions[i + 1][1] + dist);
    }

    let res = 0;
    for (let i = 0; i < m - 1; i++) {
        let dist = restrictions[i + 1][0] - restrictions[i][0];
        let height = Math.floor((dist + restrictions[i][1] + restrictions[i + 1][1]) / 2);
        res = Math.max(res, height);
    }

    return res
};