import React, { useState } from 'react'
import styles from "./WeatherApp.module.css"
const SearchBar = ({onSearch}) => {

    const [city,setCity]=useState("")
    

    const handleSearch=()=>{
        onSearch(city)
    }
  return (
   
      <div className={styles.searchCont}>
        <input className={styles.search} type="text"value={city}onChange={(e)=>setCity(e.target.value)}
        placeholder="enter city name" />
        <button onClick={handleSearch} className={styles.button}>Search</button>
      </div>
    
  )
}

export default SearchBar
