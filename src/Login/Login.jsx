import React, { useState } from 'react'

const Login = () => {
    const[username,setUsername]=useState("") 
    const[password,setPassword]=useState("") 
    const[submitted,setSubmitted]=useState(false)
    const[error,setError]=useState("")
    function handleSubmit(e){
        e.preventDefault()
        
        
        if(!username || !password)
        {
            alert("fill details")
        }
        else if(username==="user"&&password==="password")
        {
            setSubmitted(true)
            setError("")
        }
        else
        {
            setError("Invalid username or password")
            setSubmitted(false)
        }
    }
  return (
    <div>
        <h2>Login Page</h2>
        { submitted?
        (<div>Welcome, user</div>):
        <form onSubmit={handleSubmit}>
            {error&&(<p>{error}</p>)}
            <div>
        <label htmlFor="username">
            Username:</label>
            <input type="text" placeholder='username'id="username" onChange={e=>setUsername(e.target.value)} />    
            </div>
            <div>
        <label htmlFor="password">
            Password:</label>
            <input type="password" placeholder='password'id="password" onChange={e=>setPassword(e.target.value)}/>    
            </div>
            <button type='submit'>submit</button>
        </form>
        }
      
    </div>
  )
}

export default Login
