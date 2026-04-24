function furthestDistanceFromOrigin(moves: string): number {
    let l = 0;
    let r = 0;
    let d = 0;

    for (let i = 0; i < moves.length; i++) {
        if (moves[i] == "L") l++;
        else if (moves[i] == "R") r++;
        else d++;
    }

    return Math.abs(l - r) + d;
};