import React, { useState } from 'react'
import styles from "./Calculator.module.css"

const Calculator = () => {
  let [result,setResult]=useState("")
  let [value,setValue]=useState("")


  const handleClick=(e)=>{
    console.log(e.target.value)

    setValue((prev)=>prev+(e.target.value))
      
  } 
const handleClear=()=>{
  setValue("")
  setResult("")
}
const handleResult = () => {
  try {
    setResult(eval(value).toString());
  } catch (error) {
    setResult('Error');
  }
};

   return (
    <div>
      <h2>React Calculator</h2>
      <input type="text" value={value}/>
      {result&&<div>{result}</div>}
      <div className={styles.buttonCont}>
        <button className={styles.button} onClick={handleClick} value={"7"} >7</button>
        <button className={styles.button} onClick={handleClick} value={"8"}>8</button>
        <button className={styles.button} onClick={handleClick} value={"9"}>9</button>
        <button className={styles.button} onClick={handleClick} value={"+"}>+</button>
        <button className={styles.button} onClick={handleClick} value={"4"}>4</button>
        <button className={styles.button} onClick={handleClick} value={"5"}>5</button>
        <button className={styles.button} onClick={handleClick} value={"6"}>6</button>
        <button className={styles.button} onClick={handleClick} value={"-"}>-</button>
        <button className={styles.button} onClick={handleClick} value={"1"}>1</button>
        <button className={styles.button} onClick={handleClick} value={"2"}>2</button>
        <button className={styles.button} onClick={handleClick} value={"3"}>3</button>
        <button className={styles.button} onClick={handleClick} value={"*"}>*</button>
        <button className={styles.button} onClick={handleClear} >C</button>
        <button className={styles.button} onClick={handleClick} value={"0"}>0</button>
        <button className={styles.button} onClick={handleResult} >=</button>
        <button className={styles.button} onClick={handleClick} value={"/"}>/</button>
      </div>
    </div>
  )
}

export default Calculator
