import { useEffect, useState } from 'react';
import styles from "./App.module.css"

function App() {
  const [timer,setTimer]=useState(26789)
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
    let hr=Math.floor(time/(60*60))
    let min=Math.floor(time/60)
    if(min>59)
    {
      min=min%60
    }
    let remainSec=time%60
    return (`Time:${hr}:${min<10?"0":""}${min}:${remainSec<10?"0":""}${remainSec}`)
  }
  const handleReset=()=>{
    setRunning(false)
    setTimer(0)

  }
  const handleStartStop=()=>{
    setRunning(!running)
  }
  return (
    <div className={styles.app}>
      <h3>Stopwatch</h3>
      <p>
      {formatTime(timer)}
      </p>
      <div>

      <button onClick={handleStartStop}>{running?"stop":"start"}</button>
      <button onClick={handleReset} >reset</button>
      </div>
      
    </div>
  );
}

export default App;


