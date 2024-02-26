import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from "./SearchCountry.module.css"

const SearchCountry = () => {
    const[searchData,setSearchData]=useState("")
    const [country,setCountry]=useState([])
    


    useEffect(()=>{
        if(searchData){
            axios.get(`https://restcountries.com/v3.1/name/${searchData}`)
            .then((res)=>setCountry(res.data.filter((ele)=>{
                // console.log(ele.name.common.slice(0,searchData.length))
                return  ele.name.common.includes(searchData)})))
                .catch((err)=>console.error(err))
           
        }
        else
        {
            axios.get(`https://restcountries.com/v3.1/all`)
            .then((res)=>setCountry(res.data))
            .catch((err)=>console.error(err))
            
        }

    },[searchData])

  return (
    <div >
      <div className={styles.searchCont}>
        <input type="text" placeholder='Search for countries'className={styles.search} onChange={e=>setSearchData(e.target.value)}/>
      </div>
      <div className={styles.countryContainer}>
        
      {
      
      country.map((ele)=>(
  
          
  <div key={ele.cca3} className={styles.container}>
  <img src={ele.flags.png}
        alt={ele.flags.alt}
        className={styles.image}/>
  <h2 className={styles.heading}>{ele.name.common}</h2>
</div>
        ))}
      </div>
    </div>
  )
}

export default SearchCountry
