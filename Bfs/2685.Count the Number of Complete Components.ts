function countCompleteComponents(n: number, edges: number[][]): number {
    let adj: number[][] = Array.from({ length: n }, () => []);
    let inDegree = new Array(n).fill(0);

    for (let [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
        inDegree[u]++;
        inDegree[v]++;
    }
    let visited = new Array(n).fill(false);

    function solve(i: number) {
        visited[i] = true;
        let q = [i];
        let cur = 0;
        let totalEdgeCount = 0;

        while (cur < q.length) {
            let node = q[cur];
            for (let nei of adj[node]) {
                totalEdgeCount++;
                if (!visited[nei]) {
                    q.push(nei);
                    visited[nei] = true;
                }
            }
            cur++;
        }

        let totalNodes = q.length;
        if (totalNodes * (totalNodes - 1) !== totalEdgeCount) {
            return false;
        }
        return true;
    }

    let count = 0;
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            count += solve(i) ? 1 : 0;
        }
    }
    return count;
};