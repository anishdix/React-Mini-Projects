import React, { useEffect, useState } from 'react'
import axios from "axios"
import styles from "./WeatherApp.module.css"
import WeatherCard from './WeatherCard'


const WeatherDisplay = ({city}) => {
    const [data,setData]=useState(null)
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
        if(city)
        {
            setLoading(true)
            axios.get("https://api.weatherapi.com/v1/current.json",{
                params:{
                    key:"ef35e85e31044f9b91b34512232812",
                    q:city,

                },
            }).then((res)=>{
                setData(res.data)
            }).catch((err)=>{
                
                console.error(err)
                alert("Failed to fetch weather data")
            }).finally(()=>{
                setLoading(false)
            })
        }
    },[city])
  return (
    <div >
        {loading && <p>Loading data..</p>}
        {!loading && data&&(
            <div className={styles.weatherDisplay}>
                <WeatherCard title="Tempature" weatherData={`${data.current.temp_c}°C`} />
                <WeatherCard title="Humidity" weatherData={`${data.current.humidity}%`} />
                <WeatherCard title="Condition" weatherData={`${data.current.condition.text}°C`} />
                <WeatherCard title="Wind Speed" weatherData={`${data.current.wind_kph}°C`} />

            </div>
        )}
      
    </div>
  )
}

export default WeatherDisplay
