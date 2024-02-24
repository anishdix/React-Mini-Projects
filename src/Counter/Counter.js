import React, { useState } from 'react'

const Counter = () => {
    let [count,setCount]=useState(0)

    const handleInc=()=>{
        setCount((prev)=>prev+1)
    }
    const handleDec=()=>{
        setCount((prev)=>prev-1)
    }
  return (
    <div>
      <h2>Counter App</h2>
      <p>{`Count: ${count}`}</p>
      <button onClick={handleInc}>Increment</button>
      <button  onClick={handleDec}>Decrement</button>
    </div>
  )
}

export default Counter
