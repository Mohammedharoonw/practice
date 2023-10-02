import axios from 'axios';
import React  from 'react'
import { useState ,useEffect  } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';



const Update = () => {
  const {id}=useParams()
  // const [user , setUser] =useState([]);
  const navigate=useNavigate();
  const [values , setValues] =useState({
    id:'',
name:'',
email:'',
phone:''
  })

  useEffect(function getData(){
        axios.get('http://localhost:9090/users/' + id)
        .then(res=>setValues(res.data))
        .catch(err=>console.log(err));
        
  },[])

  
  
  const handlesubmit=(event)=>{
    event.preventDefault();
    axios.put(`http://localhost:9090/users/`+id,values)
        .then(res=>{
          console.log(res);
          navigate('/')
        })}
  return (
    <div style={{display:"flex"}}>
  <form onSubmit={handlesubmit}>
  <div >
    <label htmlFor='id'>ID:</label>
    <input type='text' name='id' placeholder='enter id'
    value={values.id}
    onChange={e=>{setValues({...values, id: e.target.value})}}
    />
  </div>
  <div >
  <label htmlFor='name'>NAME:</label>
    <input type='text' name='name' placeholder='enter name'
    value={values.name}
     onChange={e=>{setValues({...values, name: e.target.value})}}
    />
  </div>
  <div >
  <label htmlFor='email'>EMAIL:</label>
    <input type='email' name='email' placeholder='enter email'
    value={values.email}
    onChange={e=>{setValues({...values, email: e.target.value})}}/>
  </div>
  <div >
  <label htmlFor='phone'>PHONE:</label>
    <input type='text' name='number' placeholder='enter number'
    value={values.phone}
    onChange={e=>{setValues({...values, phone: e.target.value})}}/>
  </div>
  <button>submit</button>
  <Link to={'/'}>Back To Home</Link>
  </form>
 </div>
    )
}

export default Update
