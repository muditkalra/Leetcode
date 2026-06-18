function angleClock(hour: number, minutes: number): number {
    let everyMinuteMove = 6 // minutes hand move 6 degree every minute
    let everyHourMove = 30 // hour hand move 30 degree every hour
    let everyMinuteHourMove = 0.5  // hour hand move 0.5 degree every minute


    let minuteMove = minutes * everyMinuteMove;
    let hourMove = hour * everyHourMove;
    let hourMoveMinute = minutes * everyMinuteHourMove // every minute how much hour move as well

    let totalHourDeg = hourMove + hourMoveMinute;

    let diff = Math.abs(totalHourDeg - minuteMove);

    let res = Math.min(diff, 360 - diff);
    return res
};