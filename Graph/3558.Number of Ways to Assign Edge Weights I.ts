// This question can be solved using bfs and dfs both, but core idea is graph based that's why placed in this folder

function pow(a: number, b: number) {
    let mod = 1000000007n;
    let res = 1n;
    let base = BigInt(a);
    let exp = b;
    while (exp > 0) {
        if (exp & 1) {
            res = (res * base) % mod;
        }
        base = (base * base) % mod;
        exp >>= 1;
    }
    return Number(res);
}

function assignEdgeWeights(edges: number[][]): number {
    let n = edges.length + 1;
    let graph: number[][] = Array.from({ length: n + 1 }, () => []);

    for (let edge of edges) {
        let [u, v] = edge;
        graph[u].push(v);
        graph[v].push(u);
    }

    function dfs(node: number, parent: number) {
        let maxDepth = 0;
        for (let child of graph[node]) {
            if (child == parent) continue;
            maxDepth = Math.max(maxDepth, dfs(child, node) + 1);
        }
        return maxDepth;
    }

    const depth = dfs(1, 0);

    return pow(2, depth - 1);
};

// bfs 

function assignEdgeWeights2(edges: number[][]): number {
    let maxEdgeDepth = 0;
    let n = edges.length + 1;
    let graph: number[][] = Array.from({ length: n + 1 }, () => []);
    let visited = new Set<number>();

    for (let edge of edges) {
        let [u, v] = edge;
        graph[u].push(v);
        graph[v].push(u);
    }

    let q = [[1, 0]];
    visited.add(1);
    let head = 0;
    while (head < q.length) {
        let [node, depth] = q[head++];
        maxEdgeDepth = Math.max(maxEdgeDepth, depth);

        for (const child of graph[node]) {
            if (!visited.has(child)) {
                q.push([child, depth + 1]);
                visited.add(child);
            }
        }
    }
    return pow(2, maxEdgeDepth - 1);
};