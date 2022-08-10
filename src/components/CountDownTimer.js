import React, {useState, useEffect} from 'react'
import {getRemainingTimeMs} from "./Utility/CountDownTimerUtil"
const defaultRemainingTime = {
    hours: '00',
    minutes: '00',
    seconds: '00',
}
function CountDownTimer({countDownTimeStamp}) {
   
    const [remainingTime, setremainingTime] = useState(defaultRemainingTime)

    useEffect(()=>{
       const intervalId =  setInterval(()=>{
            updateRemaianingTime(countDownTimeStamp)
        }, 1000)
        return ()=>clearInterval(intervalId)
    })

    function updateRemaianingTime(countDown){
        setremainingTime(getRemainingTimeMs(countDown))
}

  return (
    <div className='countdown-timer'>
        <span>{remainingTime.hours}</span>
        <span>:</span>
        <span>{remainingTime.minutes}</span>
        <span>:</span>
        <span>{remainingTime.seconds}</span>
    </div>
  )
}

export default CountDownTimer