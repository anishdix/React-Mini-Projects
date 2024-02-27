import React from 'react'
import "./WeatherApp.css"
const WeatherCard = ({title,weatherData}) => {
  return (
    <div className="weather-card">
      <h3>{title}</h3>
      <p>{weatherData}</p>
    </div>
  )
}

export default WeatherCard
