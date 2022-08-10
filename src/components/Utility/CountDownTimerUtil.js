import dayjs from "dayjs";

export function getRemainingTimeMs(timeStampMs){
    const timeStampDayjs = dayjs(timeStampMs);
    const currentTime = dayjs()
    // if (timeStampDayjs.isBefore(currentTime)){
    //     return {
    //         hours: '00',
    //         minutes: '00',
    //         seconds: '00',
    //     }
    // }
    return({
        hours: getRemainingHours(currentTime,timeStampDayjs),
        minutes: getRemainingMinutes(currentTime,timeStampDayjs),
        seconds: getRemainingSeconds(currentTime,timeStampDayjs),

    })

}

function getRemainingHours(currentTime, timeStampDayjs){

    const hours = timeStampDayjs.diff(currentTime, 'hours') % 60
    return padWithZero(hours)

}
function getRemainingMinutes(currentTime, timeStampDayjs){
    const minutes = timeStampDayjs.diff(currentTime, 'minutes') % 60
    return padWithZero(minutes)

}
function getRemainingSeconds(currentTime, timeStampDayjs){
    const seconds = timeStampDayjs.diff(currentTime, 'seconds') % 24
    return padWithZero(seconds)

}

function padWithZero(number, minLength){
const numberString = number.toString()
if(numberString.length >= minLength) return numberString
return '0'.repeat(minLength - numberString.length) + numberString
}