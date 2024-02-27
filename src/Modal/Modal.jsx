import React, { useState } from 'react'
import "./Modal.css"

const Modal = () => {
    const[phone,setPhone]=useState("")
    const[date,setDate]=useState("")
    const[clicked,setClicked]=useState(false)
    const currentDate=new Date()

    const handleClick=()=>{
        setClicked(true)
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(phone.length!==10)
        {
            alert("Invalid phone number. Please enter a 10-digit phone number.")
            
        }
        let selectedDate=new Date(date)
        console.log(selectedDate)
        if(selectedDate>currentDate){
            alert("Invalid date of birth. Date of Birth cannot be from the future")

        }
        else
        {
            setClicked(false)
        }
        
    }

  return (
    
    <div className="container">

        <h1>User Details Modal</h1>
        <button onClick={handleClick}>Open Form</button>
        {clicked && (<div className="modal" onClick={e=>{
        console.log(e.target)
        if(e.target.className==="modal"){setClicked(false)}}} >
        <div className='modal-content'>
        
            <form onSubmit={handleSubmit}>
                <h3>Fill Details</h3>
                <label htmlFor="username">Username:</label>
                <input type="text" id='username' required/>
                <label htmlFor="email">Email Address:</label>
                <input type="email" id='email' required />
                <label htmlFor="phone">Phone Number:</label>
                <input type="number" id='phone' onChange={e=>setPhone(e.target.value)} required/>
                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" id='dob' onChange={e=>setDate(e.target.value)} required/>
                <button type='Submit' className='submit-button'>submit</button>
            </form>
        </div>
      
        </div>
        )}
        </div>
    
  )
}

export default Modal
