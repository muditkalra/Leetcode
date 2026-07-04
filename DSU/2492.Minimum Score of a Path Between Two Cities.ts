class DSU {
    private parent: number[];
    private score: number[];
    private rank: number[];

    constructor(n: number) {
        this.parent = Array.from({ length: n + 1 }, (_, i) => i);
        this.score = new Array(n + 1).fill(Infinity);
        this.rank = new Array(n + 1).fill(1);
    }


    find(x: number) {
        if (this.parent[x] !== x) {
            let parent = this.find(this.parent[x]);
            this.parent[x] = parent;
            this.score[x] = Math.min(this.score[x], this.score[parent]);
        }
        return this.parent[x];
    }

    union(a: number, b: number, w: number) {
        let aParent = this.find(a);
        let bParent = this.find(b);

        this.score[aParent] = Math.min(this.score[aParent], this.score[bParent], w);
        this.score[bParent] = Math.min(this.score[aParent], this.score[bParent], w);

        if (aParent == bParent) {
            return;
        }

        if (this.rank[aParent] < this.rank[bParent]) {
            this.parent[aParent] = this.parent[bParent];
        } else if (this.rank[bParent] < this.rank[aParent]) {
            this.parent[bParent] = this.parent[aParent];
        } else {
            this.parent[bParent] = this.parent[aParent];
            this.rank[a]++;
        }
    }

    getScore(a: number, b: number) {
        let aParent = this.find(a);
        let bParent = this.find(b);
        return Math.min(this.score[aParent], this.score[bParent]);
    }

}

function minScore(n: number, roads: number[][]): number {
    const dsu = new DSU(n);

    for (let [a, b, d] of roads) {
        dsu.union(a, b, d);
    }

    return dsu.getScore(1, n);

};