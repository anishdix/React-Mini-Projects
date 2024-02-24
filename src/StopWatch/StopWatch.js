import { useEffect, useState } from 'react';
import styles from "./StopWatch.module.css"

function StopWatch() {
  const [timer,setTimer]=useState(0)
  const [running,setRunning]=useState(false)

  useEffect(()=>{
    let interval
    if (running) {
      interval=setInterval(()=>{setTimer((prev)=>prev+1)},1000)
      
    }
    else
    {
      clearInterval(interval)
    }
    return()=>{clearInterval(interval)}
  },[running])


  function formatTime(time)
  {
    let min=Math.floor(time/60)
    let remainSec=time%60
    return (`Time: ${min}:${remainSec<10?"0":""}${remainSec}`)
  }
  const handleReset=()=>{
    setRunning(false)
    setTimer(0)

  }
  const handleStartStop=()=>{
    setRunning(!running)
  }
  return (
    <div className={styles.container}>
      <h3>Stopwatch</h3>
      <p>
      {formatTime(timer)}
      </p>
      <div>

      <button onClick={handleStartStop}>{running?"Stop":"Start"}</button>
      <button onClick={handleReset} >Reset</button>
      </div>
      
    </div>
  );
}

export default StopWatch;
