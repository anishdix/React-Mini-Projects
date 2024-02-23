import { useEffect, useState } from "react";
import styles from "./App.module.css"


function App() {
  let [country,setCountry]=useState([])

  useEffect( ()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then((res)=>res.json())
    .then((data)=>setCountry(data))
    .catch((err)=>{console.log(err)})
  })
  return (
    <div className={styles.app}>
      {country.map((ele)=>(

        
        <div key={ele.cca3} className={styles.container}>
        <img src={ele.flags.png}
              alt={ele.flags.alt}
              className={styles.image}/>
        <h2 className={styles.heading}>{ele.name.common}</h2>
      </div>
              ))}
    </div>
  );
}

export default App;
