function remainingMethods(n: number, k: number, invocations: number[][]): number[] {
    let adj: number[][] = Array.from({ length: n }, () => []); // O(V+E)
    let suspicious = new Array(n).fill(false); // O(V)

    // O(E)
    for (let [u, v] of invocations) { // adj building
        adj[u].push(v);
    }

    // Tc = O(V+E)
    function dfs(node: number) { // marking all suspicious nodes
        suspicious[node] = true;
        let children = adj[node];
        for (let i = 0; i < children.length; i++) {
            if (!suspicious[children[i]]) {
                dfs(children[i]);
            }
        }
    }
    dfs(k);

    let len = invocations.length;

    for (let i = 0; i < len; i++) {
        let [u, v] = invocations[i];
        if (!suspicious[u] && suspicious[v]) {
            return Array.from({ length: n }, (_, i) => i);
        }
    }

    let res: number[] = [];
    for (let i = 0; i < suspicious.length; i++) {
        if (!suspicious[i]) {
            res.push(i);
        }
    }
    return res;
};