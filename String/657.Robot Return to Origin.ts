function judgeCircle(moves: string): boolean {
    let verticalMoves = 0;
    let horizontalMoves = 0;

    for (let i = 0; i < moves.length; i++) {
        if (moves[i] == "U") verticalMoves += 1;
        else if (moves[i] == "D") verticalMoves -= 1;
        else if (moves[i] == "L") horizontalMoves -= 1;
        else horizontalMoves += 1;
    }

    return verticalMoves == 0 && horizontalMoves == 0;
};