// core idea:
// Shortest Path from single source : minimum cost incured to move from source to destination, can also be solved using dijkstra but 0-1 BFS reduces the time complexity 
// States are (i,j, cost incured to reach that point)
// so again revisiting the same cell may get you better results
// finding the minimum cost using Dijkstra or BFS or 0-1BFS

function findSafeWalk(grid: number[][], health: number): boolean {
    let dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let m = grid.length;
    let n = grid[0].length;

    function isValid(x: number, y: number): boolean {
        return x < m && x >= 0 && y < n && y >= 0;
    }
    let visited = Array.from({ length: m }, () => new Array(n).fill(Infinity));

    visited[0][0] = grid[0][0];

    let q = [[0, 0]]
    let cur = 0;

    while (cur < q.length) {
        let [i, j] = q[cur];

        let curValue = visited[i][j];

        for (const [dx, dy] of dir) {
            let newX = dx + i;
            let newY = dy + j;
            if (!isValid(newX, newY) || grid[newX][newY] + curValue >= visited[newX][newY] || grid[newX][newY] + curValue >= health) {
                continue;
            }
            q.push([newX, newY]);
            visited[newX][newY] = grid[newX][newY] + curValue;
        }
        cur++;
    }

    return visited[m - 1][n - 1] < health ? true : false;
};


//! 0-1 BFS method using Deque;
// We will use Deque to add 0 and 1 type cells


// function findSafeWalk(grid: number[][], health: number): boolean {
//     let dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
//     let m = grid.length;
//     let n = grid[0].length;

//     function isValid(x: number, y: number): boolean {
//         return x < m && x >= 0 && y < n && y >= 0;
//     }
//     let visited = Array.from({ length: m }, () => new Array(n).fill(Infinity));

//     let q = new Deque<[number, number]>();
//     q.pushBack([0, 0]);
//     visited[0][0] = grid[0][0];

//     while (q.size()) {
//         let [i, j] = q.popFront();

//         for (const [dx, dy] of dir) {
//             let newX = dx + i;
//             let newY = dy + j;

//             if (!isValid(newX, newY)) {
//                 continue;
//             }

//             let cost = visited[i][j] + grid[newX][newY];

//             if (cost >= health) {
//                 continue;
//             }

//             if (cost < visited[newX][newY]) {
//                 visited[newX][newY] = cost;
//                 if (visited[newX][newY] == 1) {
//                     q.pushBack([newX, newY]);
//                 } else {
//                     q.pushFront([newX, newY]);
//                 }
//             }
//         }
//     }

//     return visited[m - 1][n - 1] < health;
// };