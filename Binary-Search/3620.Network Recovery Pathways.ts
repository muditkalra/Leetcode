
// Core Idea: 
// We need to implement binary search on answer
// check function for binary search is implemented using Dijkstra

// Here we can also implement Topological Sorting, as Graph is DAG, and topological sorting will reduce overall tc


// tc: O((V+E)logV * logC) , where C is max-min cost of the graph
function findMaxPathScore(edges: number[][], online: boolean[], k: number): number {
    let n = online.length;
    let adj: number[][][] = Array.from({ length: n }, () => []);
    let min = Infinity;
    let max = 0;

    for (let [u, v, c] of edges) { // O(m)
        if (!online[u] || !online[v]) {
            continue;
        }
        adj[u].push([v, c]);
        min = Math.min(min, c);
        max = Math.max(max, c);
    }

    function check(score: number) { // O((V+E) log V) => O(N+M)
        let dist = new Array(n).fill(Infinity);
        let q = new MinPriorityQueue<number[]>((value) => value[0]);
        dist[0] = 0;
        q.push([0, 0]);

        while (q.size()) {
            let [w, node] = q.pop()!;
            if (w > k) {
                return w;
            }

            if (node == n - 1) {
                return w
            }

            if (w > dist[node]) {
                continue;
            }

            for (let [v, c] of adj[node]) {
                if (c < score) {
                    continue;
                }
                let newCost = dist[node] + c;

                if (newCost < dist[v]) {
                    dist[v] = newCost;
                    q.push([dist[v], v]);
                }
            }
        }
        return dist[n - 1];
    }

    let low = min;
    let high = max;

    while (low <= high) { // log(maxC- minC) = log(10^9) = around 29 iterations ;
        let mid = Math.floor((low + high) / 2);

        if (check(mid) <= k) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return high < min ? -1 : high;
};