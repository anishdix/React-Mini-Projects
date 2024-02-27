import React, { useState } from 'react'
import SearchBar from './SearchBar'
import WeatherDisplay from './WeatherDisplay'
import styles from "./WeatherApp.module.css"
const WeatherApp = () => {
    const [city,setCity]=useState("")
    

    const handleSearch=(cityVal)=>{
        setCity(cityVal)
    }
   
  return (
    <div className={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <WeatherDisplay city={city}/>
    </div>
  )
}

export default WeatherApp
