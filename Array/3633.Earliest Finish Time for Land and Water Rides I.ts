function earliestFinishTime(landStartTime: number[], landDuration: number[], waterStartTime: number[], waterDuration: number[]): number {
    function solve(start1: number[], start1Duration: number[], start2: number[], start2Duration: number[]) {
        let finish1 = Infinity;

        for (let i = 0; i < start1.length; i++) {
            finish1 = Math.min(finish1, start1[i] + start1Duration[i]);
        }

        let finish2 = Infinity;
        for (let i = 0; i < start2.length; i++) {
            finish2 = Math.min(finish2, Math.max(finish1, start2[i]) + start2Duration[i]);
        }
        return finish2;
    }



    let landTime = solve(landStartTime, landDuration, waterStartTime, waterDuration);
    let waterTime = solve(waterStartTime, waterDuration, landStartTime, landDuration);

    return Math.min(landTime, waterTime);
};