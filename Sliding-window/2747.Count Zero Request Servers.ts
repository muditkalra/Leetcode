function countServers(n: number, logs: number[][], x: number, queries: number[]): number[] {
    let m = logs.length;

    logs.sort((a, b) => a[1] - b[1]);
    let qL = queries.length;
    let nQ = new Array(qL);

    for (let i = 0; i < qL; i++) {
        nQ[i] = [queries[i], i];
    }

    nQ.sort((a, b) => a[0] - b[0]);

    let i = 0;
    let j = 0;
    let serverFreq = new Map<number, number>();
    let res = new Array(qL).fill(0);

    for (let [q, index] of nQ) {
        let s = q - x;
        let e = q;

        while (j < m && logs[j][1] <= e) {
            serverFreq.set(logs[j][0], (serverFreq.get(logs[j][0]) || 0) + 1);
            j++;
        }

        while (i < m && logs[i][1] < s) {
            let freq = serverFreq.get(logs[i][0])!;
            if (freq == 1) {
                serverFreq.delete(logs[i][0]);
            } else {
                serverFreq.set(logs[i][0], freq - 1);
            }
            i++;
        }

        res[index] = n - serverFreq.size;
    }
    return res;
};