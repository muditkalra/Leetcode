function maximumUnits(boxTypes: number[][], truckSize: number): number {
    boxTypes.sort((a, b) => b[1] - a[1]);

    let n = boxTypes.length;
    let units = 0;

    for (let i = 0; i < n; i++) {
        if (truckSize >= boxTypes[i][0]) {
            truckSize -= boxTypes[i][0];
            units += (boxTypes[i][0] * boxTypes[i][1]);
        } else {
            units += truckSize * boxTypes[i][1];
            break;
        }
    }
    return units;
};