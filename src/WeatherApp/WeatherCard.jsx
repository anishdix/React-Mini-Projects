import React from 'react'
import styles from "./WeatherApp.module.css"

const WeatherCard = ({title,weatherData}) => {
  return (
    <div className={styles.weatherCard}>
      <h3>{title}</h3>
      <p>{weatherData}</p>
    </div>
  )
}

export default WeatherCard
