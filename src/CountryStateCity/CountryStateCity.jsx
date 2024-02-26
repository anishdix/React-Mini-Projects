import React, { useEffect, useState } from 'react'
import axios from "axios"
import styles from "./CountryStateCity.module.css"
const CountryStateCity = () => {
    const [country,setCountry]=useState([])
    const [state,setState]=useState([])
    const [city,setCity]=useState([])
    const [selectedCountry,setSelectedCountry]=useState("")
    const [selectedState,setSelectedState]=useState("")
    const [selectedCity,setSelectedCity]=useState("")

    useEffect(()=>{
        axios.get("https://crio-location-selector.onrender.com/countries")
        .then((res)=>setCountry(res.data))
        .catch((err)=>{console.error(err)})
    },[])
    useEffect(()=>{
      if(selectedCountry)
        {axios.get(`https://crio-location-selector.onrender.com/country=${selectedCountry}/states`)
        .then((res)=>{
        setState(res.data)
        setSelectedState("")
        setSelectedCity("")
        setCity([])
      })
        .catch((err)=>{console.error(err)})}
    },[selectedCountry])
    useEffect(()=>{
      if(selectedCountry&&selectedState)
        axios.get(`https://crio-location-selector.onrender.com/country=${selectedCountry}/state=${selectedState}/cities`)
        .then((res)=>{setCity(res.data)
        setSelectedCity("")
      })
        .catch((err)=>{console.error(err)})
    },[selectedCountry,selectedState])
  return (
    <div className={styles.container}>
      <h2>Select Location</h2>
      <div className={styles.dropDownCOnt}>
        <select onChange={e=>setSelectedCountry(e.target.value)} value={selectedCountry} >
          <option disabled value="">Select Country</option>
          {country.map((country)=>{return <option value={country} key={country}>{country}</option>})}
        </select>
        <select onChange={((e)=>setSelectedState(e.target.value))} value={selectedState} disabled={!selectedCountry}>
        <option disabled value="">Select State</option>
        {state.map((state)=>{return <option value={state} key={state}>{state}</option>})}
        </select>
        <select onChange={((e)=>setSelectedCity(e.target.value))} value={selectedCity} disabled={!selectedCountry&&!selectedState}>
        <option disabled value="">Select City</option>
        {city.map((city)=>{return <option value={city} key={city}>{city}</option>})}
        </select>
      </div>
      {
        selectedCountry&&selectedCity&&selectedState?
        (<div>{`You selected ${selectedCity}, ${selectedState}, ${selectedCountry} `}</div>)
        :null
      }
    </div>
  )
}

export default CountryStateCity
