function colorGrid(n: number, m: number, sources: number[][]): number[][] {
    let output = Array.from({ length: n }, () => new Array(m).fill(0));
    let dist = Array.from({ length: n }, () => new Array(m).fill(Infinity));
    let q: number[][] = [];

    for (const [r, c, color] of sources) {
        q.push([r, c, color]);
        dist[r][c] = 0;
        output[r][c] = color;
    }

    let dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    let idx = 0;

    while (idx < q.length) {
        let [r, c, color] = q[idx]!;

        let curDist = dist[r][c];

        for (let j = 0; j < 4; j++) {
            let newX = r + dir[j][0];
            let newY = c + dir[j][1];

            if (newX < 0 || newY < 0 || newX >= n || newY >= m) continue;

            if (dist[newX][newY] > curDist + 1) {
                dist[newX][newY] = curDist + 1;
                output[newX][newY] = color;
                q.push([newX, newY, color]);
            } else if (dist[newX][newY] == curDist + 1) {
                if (color > output[newX][newY]) {
                    output[newX][newY] = color;
                    q.push([newX, newY, color]);
                }
            }
        }
        idx++;
    }

    return output;
};