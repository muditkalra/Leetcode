function minScore(n: number, roads: number[][]): number {
    let adj: number[][][] = Array.from({ length: n + 1 }, () => []);

    for (let [a, b, d] of roads) {
        adj[a].push([b, d]);
        adj[b].push([a, d]);
    }

    let q = [1];
    let cur = 0;
    let min = Infinity;
    let visited = new Array(n + 1).fill(false);
    visited[1] = true;

    while (cur < q.length) {
        let node = q[cur];

        for (let [b, d] of adj[node]) {
            min = Math.min(d, min);
            if (!visited[b]) {
                q.push(b);
                visited[b] = true;
            }
        }
        cur++;
    }
    return min
};