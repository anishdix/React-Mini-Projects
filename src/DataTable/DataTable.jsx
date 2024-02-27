import React, { useEffect, useMemo, useState } from 'react'

const DataTable = () => {
    
const  data=[

    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

]



const [tableValues,setTableValues]=useState([])
useEffect(()=>{
    setTableValues(data)
},[])

// const memoizedData = useMemo(() => tableValues, [tableValues]);

const handleData=()=>{
    setTableValues(data.sort((a,b)=>{
        // const data=new Date(b.date)-new Date(a.date)
        // if(data!==0)
        // {
        //     return data
        // }
        // return a.views-b.views
        return new Date(b.date)-new Date(a.date)
    }))
    
}
const handleViews=()=>{
    setTableValues(data.sort((a,b)=>b.views-a.views))

}

  return (
    <div>
      <h1>Date and Views Table</h1>
      <div>

      <button onClick={handleData}>Sort by Date</button>
      <button onClick={handleViews}>Sort by Views</button>
      </div>
      <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Views</th>
                <th>Article</th>
            </tr>
        </thead>
        <tbody>
            {tableValues.map((ele)=>(
                <tr>
                    <td>{ele.date}</td>
                    <td>{ele.views}</td>
                    <td>{ele.article}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable
