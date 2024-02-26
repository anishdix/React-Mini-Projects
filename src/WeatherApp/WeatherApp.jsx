import React, { useState } from 'react'

const WeatherApp = () => {
    const [city,setCity]=useState("")
    

    const handleSearch=(cityVal)=>{
        setCity(cityVal)
    }
   
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <WeatherCard city={city}/>
    </div>
  )
}

export default WeatherApp
