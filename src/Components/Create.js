import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Create = () => {
const navigate=useNavigate();
  const [values , setValues] =useState({
    id:'',
name:'',
email:'',
phone:''
  })
  
  const handlesubmit=(event)=>{
    event.preventDefault();
    axios.post('http://localhost:9090/users',values)
        .then(res=>{
          console.log(res);
          navigate('/')
        })
        
  }
  return (
 <div style={{display:"flex"}}>
  <form onSubmit={handlesubmit}>
  <div >
    <label htmlFor='id'>ID:</label>
    <input type='text' name='id' placeholder='enter id'
    
    onChange={e=>{setValues({...values, id: e.target.value})}}
    />
   
  </div>
  <div >
  <label htmlFor='name'>NAME:</label>
    <input type='text' name='name' placeholder='enter name'
     onChange={e=>{setValues({...values, name: e.target.value})}}
    />
  </div>
  <div >
  <label htmlFor='email'>EMAIL:</label>
    <input type='email' name='email' placeholder='enter email'
    onChange={e=>{setValues({...values, email: e.target.value})}}/>
  </div>
  <div >
  <label htmlFor='phone'>PHONE:</label>
    <input type='text' name='number' placeholder='enter number'
    onChange={e=>{setValues({...values, phone: e.target.value})}}/>
  </div>
  <button>submit</button>
  <Link to={'/'}>Back To Home</Link>
  </form>
 </div>
    )
}

export default Create
