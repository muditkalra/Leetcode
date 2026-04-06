function robotSim(commands: number[], obstacles: number[][]): number {
    let dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let curDir = 0;
    let curPos = [0, 0];
    let obs = new Set<string>();
    let maxDistance = 0;

    for (let i = 0; i < obstacles.length; i++) {
        let pos = `${obstacles[i][0]}_${obstacles[i][1]}`;
        obs.add(pos);
    }


    for (let i = 0; i < commands.length; i++) {
        if (commands[i] == -1) {
            curDir = (curDir + 1) % 4;
        }
        else if (commands[i] == -2) {
            curDir = (curDir + 3) % 4;
        }
        else {
            for (let j = 1; j <= commands[i]; j++) {
                let newPosX = curPos[0] + dir[curDir][0];
                let newPosY = curPos[1] + dir[curDir][1];
                let pos = `${newPosX}_${newPosY}`;
                if (obs.has(pos)) {
                    break;
                }
                curPos = [newPosX, newPosY];
            }
            maxDistance = Math.max(maxDistance, curPos[0] * curPos[0] + curPos[1] * curPos[1]);
        }
    }

    return maxDistance;
};