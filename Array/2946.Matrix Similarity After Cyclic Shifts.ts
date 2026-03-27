function areSimilar(mat: number[][], k: number): boolean {
    let m = mat.length;
    let n = mat[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] !== mat[i][(j + k) % n]) {
                return false;
            }
        }
    }
    return true;
}