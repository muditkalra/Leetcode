function decodeCiphertext(encodedText: string, rows: number): string {

    // brute force
    // if (encodedText.length == 0 || rows == 1) {
    //     return encodedText;
    // }


    // let col = encodedText.length / rows;
    // let mat = Array.from({ length: rows }, () => new Array(col).fill(''));


    // for (let i = 0; i < encodedText.length; i++) {
    //     let curRow = Math.floor(i / col);
    //     let curCol = i % col;
    //     mat[curRow][curCol] = encodedText[i];
    // }

    // let j = 0;
    // let originalStr = "";

    // while (j < col) {
    //     let tempJ = j;
    //     for (let i = 0; i < rows && tempJ < col; i++) {
    //         originalStr += mat[i][tempJ];
    //         tempJ++;
    //     }
    //     j++;
    // }
    // return originalStr.trimEnd();



    // optimized

    let cols = encodedText.length / rows;
    let str = "";

    for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
            let diagonalIndex = row + col;

            if (diagonalIndex > cols) {
                break;
            }

            const flatIndex = row * cols + diagonalIndex;
            str += encodedText[flatIndex];
        }
    }

    return str.trimEnd();
};