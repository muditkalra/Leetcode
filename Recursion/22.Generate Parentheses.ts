function generateParenthesis(n: number): string[] {
    let res: string[] = [];

    function solve(startCount: number, endCount: number, par: string[]) {
        if (endCount == n) {
            res.push(par.join(""));
            return;
        }

        //start case
        // start can only be made if its count is less than n
        // end can only be made if its count is less than start count
        if (startCount < n) {
            par.push('(');
            solve(startCount + 1, endCount, par);
            par.pop();
        }

        if (endCount < startCount) {
            par.push(')');
            solve(startCount, endCount + 1, par);
            par.pop();
        }
        return;
    }
    solve(0, 0, []);
    console.log(res);
    return res;
};