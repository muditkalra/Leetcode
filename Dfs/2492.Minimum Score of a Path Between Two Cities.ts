function minScore(n: number, roads: number[][]): number {
    let adj: number[][][] = Array.from({ length: n + 1 }, () => []);

    for (let [a, b, d] of roads) {
        adj[a].push([b, d]);
        adj[b].push([a, d]);
    }

    let visited = new Array(n + 1).fill(false);
    let min = Infinity;

    function dfs(node: number) {
        visited[node] = true;
        for (let [b, d] of adj[node]) {
            min = Math.min(min, d)
            if (!visited[b]) {
                dfs(b);
            }
        }
    }

    dfs(1);
    return min;
};