// clue 1: Question is asking you to find the minimum number of moves that signals for shortest path or bfs type algo
// why normal bfs won't work ? as in bfs we traverse level by level and in a single level we can't take all litter in a single move
// our visited states are also not simple as [r,c] as we can visit same r, c with different energy and different amount of litter collected
// and also amount of litter is also not sufficient as we can still reach the same cell with same amount of litter collected but different litter picked on the way to r,c
// so we need to keep track of which litter is collected specifically
// for that we need to maintain states likes visited[r][c][energy][mask]= true | false
// but we can reduce states as we if are reaching same r,c with same litter collected and with energy left less than previous path then it means that this path can be dominated by path with more energy left
// let say path with more energy left is p1 and less energy is p2, then say p1 can cover c1,c2,c3,c4 cells and p2 can only cover c1,c2 as it has less energy to explore 
// so path with more energy left can explore more and also dominate path p2
// this will reduce our states to [r,c, mask] = energy
// Now we will keep track of best energy left to reach a cell r,c after collecting "mask" litters 
// To keep track which litter we have collected on the way we will use bitmasking
// we will give each litter an id and then represent that litter in terms of bitmask and store that mask in id array
// We will only mask for all the "L" and 0 will there for all other values
// Now to start with bfs we will push new item in queue as [x,y,mask,energy, moves];
// Then normal bfs will follow 
// if any node.energy is 0 then that path is invalid, so can move further on that path
// We have three case to 
// 1. if new cell is 'L' then we need to create new mask
// 2. if new cell is 'R'  then we need to set current energy back to Energy
// 3. if new cell is '.'  then we simply need to reduce the energy


function minMoves(classroom: string[], energy: number): number {
    let m = classroom.length;
    let n = classroom[0].length;
    let startIdx = [-1, -1];
    let dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let litterCount = 0;
    let id = Array.from({ length: m }, () => new Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (classroom[i][j] == "S") {
                startIdx = [i, j];
            } else if (classroom[i][j] == "L") {
                let mask = (1 << litterCount);
                id[i][j] = mask;
                litterCount++;
            }
        }
    }

    let full = 1 << litterCount;
    let [sx, sy] = startIdx;

    let best = Array.from({ length: m }, () => Array.from({ length: n }, () => new Array(full).fill(-1)));
    best[sx][sy][0] = energy;

    let q = [{ x: sx, y: sy, mask: 0, e: energy, moves: 0 }];
    let idx = 0;

    const isValid = (x: number, y: number) => x >= 0 && y >= 0 && x < m && y < n;

    while (idx < q.length) {
        let node = q[idx++];

        if (node.mask == full - 1) {
            return node.moves;
        }

        if (node.e == 0) {
            continue;
        } 

        for (let [dx, dy] of dir) {
            let newX = dx + node.x;
            let newY = dy + node.y;

            if (!isValid(newX, newY) || classroom[newX][newY] == "X") {
                continue;
            }
            let newE = classroom[newX][newY] == "R" ? energy : node.e - 1;
            let newMask = node.mask | id[newX][newY];

            if (newE > best[newX][newY][newMask]) {
                best[newX][newY][newMask] = newE;
                q.push({ x: newX, y: newY, e: newE, mask: newMask, moves: node.moves + 1 })
            }
        }
    }
    return -1;
};