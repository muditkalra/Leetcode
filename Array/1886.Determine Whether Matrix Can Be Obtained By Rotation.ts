function findRotation(mat: number[][], target: number[][]): boolean {
    let n = mat.length;

    function rotate90AndCheck(mat: number[][]) {
        let n = mat.length;

        for (let i = 0; i < n; i++) { // transpose
            for (let j = i; j < n; j++) {
                [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
            }
        }
        for (let i = 0; i < n; i++) {
            mat[i].reverse(); // rotate column
        }

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (target[i][j] != mat[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }

    // Four case possible if
    // 1.  Already eq
    // 2.  Need one 90 deg turn 
    // 3. Need two 90 deg turn
    // 4. Need three 90 deg turn 

    //case1 
    let case1 = true;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (target[i][j] != mat[i][j]) {
                case1 = false;
                break;
            }
        }
    }

    // case 2; 
    const case2 = rotate90AndCheck(mat);
    const case3 = rotate90AndCheck(mat);
    const case4 = rotate90AndCheck(mat);

    return case1 || case2 || case3 || case4
};
