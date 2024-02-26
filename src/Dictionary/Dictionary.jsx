import React, { useState } from 'react'

const Dictionary = () => {
    let data=
    [
    
        { word: "react", meaning: "A JavaScript library for building user interfaces." },
    
        { word: "component", meaning: "A reusable building block in React." },
    
        { word: "state", meaning: "An object that stores data for a component." }
    
    ]

    let [search,setSearch]=useState("")
    let [result,setResult]=useState("")


    const handleClick=()=>{
        let found=data.find((ele)=>{console.log(ele.word)
            return ele.word===search})
        console.log(found)
        if(found)
        {
            setResult(found.meaning)
        }
        else
        {
            setResult("Word not found in the dictionary.")
        }
    }
    
    
  return (
    <div>
      <h2>Dictionary App</h2>
      <div>
        <input type="text" placeholder='Search for a word' onChange={e=>{setSearch(e.target.value.toLowerCase())}}/>
        <button onClick={handleClick}>Search</button>
      </div>
      <h4>Definition:</h4>
      {setResult && (<div>{result}</div>)}
      
    </div>
  )
}

export default Dictionary
