import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from "./PaginationApp.module.css"

const PaginationApp = () => {
    const[tableData,setTableData]=useState([])
    
    const[page,setPage]=useState(1)

    let maxPage=Math.ceil(tableData.length/10)
    let startIndex=(page-1)*10;
    let endIndex=startIndex+10
    let filteredData=tableData.slice(startIndex,endIndex)

    useEffect(()=>{
        fetchData();
    })
    const fetchData= async()=>{
        try{let res=await axios.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
        setTableData(res.data)}
        catch(err){
            alert("Failed to fetch data")
        }

    }
    const handleNext=()=>{
        if(page<maxPage)
        {
            setPage((prev)=>prev+1)
        }

    }
    const handlePrev=()=>{
        if(page>1)
        {
            setPage((prev)=>prev-1)
        }

    }
  return (
    <div className={styles.container}>
        <h2 >Employee Data Table</h2>
      <table className={styles.table}>
        <thead >
            <tr className={styles.heading}>
                <th>
                    Id
                </th>
                <th>
                    Name
                </th>
                <th>
                    Email
                </th>
                <th>
                    Role
                </th>
            </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.role}</td>
            </tr>
          ))}
        </tbody>

      </table>
      <div className={styles.buttonCont}>
        <button onClick={handlePrev} className={styles.button}>Previous</button>
        <span className={styles.pageNo}>{page}</span>
        <button onClick={handleNext} className={styles.button}>Next</button>
      </div>
    </div>
  )
}

export default PaginationApp
