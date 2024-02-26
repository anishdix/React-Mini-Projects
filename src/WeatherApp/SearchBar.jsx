import React, { useState } from 'react'

const SearchBar = ({onSearch}) => {

    const [city,setCity]=useState("")
    

    const handleSearch=(cityVal)=>{
        onSearch(cityVal)
    }
  return (
    <div>
      <div>
        <input type="text"value={city}onChange={(e)=>setCity(e.target.value)}
        placeholder="enter city name" />
        <button onClick={handleSearch}></button>
      </div>
    </div>
  )
}

export default SearchBar
